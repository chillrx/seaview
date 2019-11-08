import React, { Fragment } from "react";
import "./rightSideNav.scss";
import ClearIcon from "@material-ui/icons/Clear";

export default ({ toggleRightSideNav, opened }) => {
  return (
    <Fragment>
      {opened && (
        <div className="rightSideNavContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px 10px 44px"
            }}
          >

            <p></p>

            <ClearIcon
              style={{ cursor: "pointer" }}
              onClick={toggleRightSideNav}
            />
          </div>

          <p
            style={{
              color: "#50CFCA",
              fontFamily: "Roboto, Black",
              fontWeight: "bolder",
              textAlign: "center",
              fontSize: "30px",
              marginBottom: "5px"
            }}
          >
            Cruz das Almas
          </p>

          <p
            style={{
              color: "#1F304C",
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "10px"
            }}
          >
            1,62m
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "18px",
              color: "#1F304C",
              textAlign: "center",
              marginBottom: "20px"
            }}
          >
            <p style={{ fontWeight: "bold" }}>Último registro</p>
            <p>18/10/2019 - 19:32</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "380px",
                height: "20px",
                background:
                  "transparent linear-gradient(270deg,#EDA3A3 0%,#E3BD90 51%, #75D17C 100%) 0% 0% no-repeat padding-box",
                border: "1px solid #D1D1D1",
                borderRadius: "50px"
              }}
            ></div>
          </div>

          <div
            style={{
              color: "#505F78",
              display: "flex",
              justifyContent: "space-between",
              margin: "13px 25px"
            }}
          >
            <p>Baixo</p>
            <p>Alto</p>
          </div>

          <div
            style={{
              border: "1px solid #505F78",
              opacity: 0.2,
              height: "0.1px",
              margin: "0 20px",
              marginBottom: "23px"
            }}
          ></div>

          <div
            style={{
              display: "flex",
              color: "#505F78",
              fontSize: "18px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <p
              style={{
                fontWeight: "bold"
              }}
            >
              Status:
            </p>
            <p style={{ marginLeft: "5px" }}>Normal</p>
          </div>

          <div
            style={{
              display: "flex",
              color: "#505F78",
              fontSize: "18px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <p
              style={{
                fontWeight: "bold"
              }}
            >
              Maior Registrado:
            </p>
            <p style={{ marginLeft: "5px" }}>2.20m</p>
          </div>

          <div
            style={{
              display: "flex",
              color: "#505F78",
              fontSize: "18px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <p
              style={{
                fontWeight: "bold"
              }}
            >
              Menor Registrado:
            </p>
            <p style={{ marginLeft: "5px" }}> 0.2m</p>
          </div>

          <div
            style={{
              display: "flex",
              color: "#505F78",
              fontSize: "18px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <p
              style={{
                fontWeight: "bold"
              }}
            >
              Precisão:
            </p>
            <p style={{ marginLeft: "5px" }}>95%</p>
          </div>

          <div
            style={{
              display: "flex",
              color: "#505F78",
              fontSize: "18px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <p
              style={{
                fontWeight: "bold"
              }}
            >
              Altitude:
            </p>
            <p style={{ marginLeft: "5px" }}>3000ft</p>
          </div>

          <div
            style={{
              border: "1px solid #505F78",
              opacity: 0.2,
              height: "0.1px",
              margin: "0 20px",
              marginTop: "23px",
              marginBottom: "23px"
            }}
          ></div>

          <div
            style={{
              display: "flex",
              color: "#505F78",
              fontSize: "18px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#50CFCA"
              }}
            >
              Comentários recentes:
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <div>
              <img
                src="https://cdn.falauniversidades.com.br/wp-content/uploads/2018/09/julia-jolie-youtuber-fala-fala-entrevista.jpg"
                width={61}
                height={61}
                style={{
                  borderRadius: 50,
                  marginRight: 10,
                  marginLeft: 20
                }}
                alt="Mulher branca com cabelo escuro"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <p
                style={{
                  color: "#505F78",
                  fontWeight: "bold",
                  paddingLeft: 5,
                  marginRight: 5
                }}
              >
                Usuário do Google - 22/08/2019
              </p>
              <p style={{ color: "#979797", fontStyle: "italic" }}>
                Semana passada tivemos problemas com enchentes aqui em casa
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Cbjr.jpg"
                width={61}
                height={61}
                style={{
                  borderRadius: 50,
                  marginRight: 10,
                  marginLeft: 20
                }}
                alt="Homem branco, sorrindo e com cabelo curto"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <p
                style={{
                  color: "#505F78",
                  fontWeight: "bold",
                  paddingLeft: 5,
                  marginRight: 5
                }}
              >
                Usuário do Google - 22/08/2019
              </p>
              <p style={{ color: "#979797", fontStyle: "italic" }}>
                Semana passada tivemos problemas com enchentes aqui em casa
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <div>
              <img
                src="http://www.bandnewsfm.com.br/wp-content/uploads/2017/05/carol-costa.jpg"
                width={61}
                height={61}
                style={{
                  borderRadius: 50,
                  marginRight: 10,
                  marginLeft: 20
                }}
                alt="Mulher branca com cabelos curtos e encaracolados"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <p
                style={{
                  color: "#505F78",
                  fontWeight: "bold",
                  paddingLeft: 5,
                  marginRight: 5
                }}
              >
                Usuário do Google - 22/08/2019
              </p>
              <p style={{ color: "#979797", fontStyle: "italic" }}>
                Semana passada tivemos problemas com enchentes aqui em casa
              </p>
            </div>
          </div>
          <div style={{ margin: "auto", textAlign: "center", marginTop: 5 }}>
            <button
              style={{
                width: 340,
                height: 40,
                border: "none",
                backgroundColor: "#50CFCA",
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Adicionar Comentário
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
