import React, { useState, useEffect } from "react";
import { map } from "lodash";
import { CardGroup, Card, Button, Row } from "react-bootstrap";
import { putLike, veriLike } from "../../config/votation";

export default function ListPlaces(props) {
  const { places } = props;
  const [fistVotar, setFistVotar] = useState();

  const token = localStorage.getItem("j@9JC4");

  return (
    <div className="list-places">
      <Row xs={1} md={3} className="g-4">
        {map(places, (place) => (
          <Place
            key={place.id_negocio}
            places={place}
            setFistVotar={setFistVotar}
            fistVotar={fistVotar}
            token={token}
          />
        ))}
      </Row>
    </div>
  );
}

function Place(props) {
  const { places, setFistVotar, fistVotar, token } = props;

  async function validar() {
    const response = await veriLike();
    setFistVotar(response.id_partici);
  }

  useEffect(() => {
    (async () => {
      if (token) {
        await validar();
      }

      // const responsePutLike = await putLike();
      // console.log(responsePutLike.messege);
    })();
  }, [token]);

  const votar = async () => {
    await validar();
    if (fistVotar === 0) {
      const response = await putLike(places.id_negocio);
      await validar();
      console.log("votaste");
    }
    console.log(fistVotar);
  };

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={places.url} />
        <Card.Body>
          <Card.Title>{places.nombre}</Card.Title>
          <Card.Text>{places.descripccion}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {fistVotar === 0 ? (
            <Button
              onClick={() => {
                votar();
              }}
            >
              Votar
            </Button>
          ) : (
            (places.id_negocio === fistVotar)?(<div style={{
              color: "#66bb6a",
              fontSize: "15px"
            }}>Votaste Aqui</div>):(<div></div>)
          )}
          <small className="text-muted">Puntaje: {places.puntaje}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
