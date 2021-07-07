export default function CategoriesCollection() {
  return (
    <div className="categories-colection">
      <div className="categorie-item">
        <div className="info">
          <h5>Centro Agroecologico </h5>
          <span>
            El Centro de Agroecología San Francisco de Asís A.C. surgió en 1986
            en el seno del movimiento indígena y campesino en la región Sierra
            del Estado de Chiapas...
          </span>
        </div>
        <div className="image-categorie">
          <img
            src={
              "https://res.cloudinary.com/jordiespinoza/image/upload/v1625618901/210190494_650050889726229_7354545389220833130_n_y1ppxl.png"
            }
          />
        </div>
      </div>
      <div className="categorie-item">
        <div className="info">
          <h5>Finca Triunfo Verde (FTV)</h5>
          <span>
            Finca Triunfo Verde es una organización de agricultores bastante
            joven y los miembros fundadores comenzaron su trabajo de
            organización en 1999 con el objetivo de construir una organización
            que se enfocara en encontrar soluciones a los problemas comunes que
            enfrentan los pequeños agricultores.
          </span>
        </div>
        <div className="image-categorie">
          <img
            src={
              "https://res.cloudinary.com/jordiespinoza/image/upload/v1625618901/208848176_3411805742255556_8466330440563081171_n_sox1u0.png"
            }
          />
        </div>
      </div>
      <div className="categorie-item">
        <div className="info">
          <h5>CEPCO (Coordinadora Estatal de Productores de Café de Oaxaca)</h5>
          <span>
            La Coordinadora se constituyó reuniendo a diversas organizaciones de
            pequeños productores de café, de las distintas regiones cafetaleras
            del estado de Oaxaca (Costa, Istmo Mazateca, Mixteca, Papaloapan,
            Sierra Norte, Sierra Sur). Algunas de las organizaciones ya tenían
            varios años de experiencia y otras eran de nueva creación.
          </span>
        </div>
        <div className="image-categorie">
          <img
            src={
              "https://res.cloudinary.com/jordiespinoza/image/upload/v1625618901/211145242_178739120942091_8347765989901473975_n_x3nw2p.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
