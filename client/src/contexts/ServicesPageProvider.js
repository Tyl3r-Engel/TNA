import { createContext, useState, useEffect } from 'react';
import fillerImg from '../components/servicesPage/fillerImg.jpg';
import skinImg from '../components/servicesPage/skinImg.jpg';
import toxImg from '../components/servicesPage/toxImg.jpg';


const ServicesPageContext = createContext({})

export const ServicesPageProvider = ({ children }) => {
  const [currentService, setCurrentService] = useState({});
  const [serviceArray, setServiceArray] = useState([]);

  useEffect(() => {
    class Service {
      constructor(id, title, description, img) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
      }
    }
    const service1 = new Service(
      1,
      "Fillers",
      `Taylor Northcott Aesthetics has a variety of options of Dermal Fillers. At your appointment Taylor will assess your needs and determine the best filler for you.

      Cheeks, Chin, and Jaw line

      Cheeks-$450-900

      Jawline- $450-900

      Chin-$450-900

      lip

      Mini Lip-$400

      Full Lip-$600

      Lips include dental block, reusable icepack and Image Restoring Lip Enhancer for post treatment.

      +$50 per treatment for lip filler with added lip flip ($80 retail)`,
      fillerImg
    )

    setServiceArray([
      service1,
      new Service(
        2,
        "Skin Tightening",
        `Microneedling: is a light resurfacing treatment that helps with fine lines, minor scars and skin tightening. The needles stimulate collagen production. So by causing some minor injury to the skin, that activates the cells that produce new strong collagen!

        Individual: $200

        Package of 3: $500

        Individual with PRF: $300

        Package of 3 with PRF: $750`,
        skinImg
      ),
      new Service(
        3,
        "Tox",
        `Tox (Neuromodulator, commonly referred to as “Botox”)

        Taylor Northcott Aesthetics has a variety of options of Neuromodulators. At your appointment Taylor will assess your needs and determine the best Tox for you.

        Tox: $10/unit

        *Tox takes a full 14 days for results. For first time clients touch ups are complimentary within treatment area between days 14-21 after your initial treatment.`,
        toxImg
      )
    ]);
    setCurrentService(service1);
  }, [])

  if (serviceArray.length === 0) {
    return null
  }

  return (
    <ServicesPageContext.Provider value={{ serviceArray, currentService, setCurrentService }} >
      {children}
    </ServicesPageContext.Provider>
  )
}

export default ServicesPageContext