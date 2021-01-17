import axios from "axios";

// const getHeroData = async () => {
//   try {
//     const proxy = `https://cors-anywhere.herokuapp.com/`;
//     const url = `http://hahow-recruit.herokuapp.com/heroes`;
//     const heroProps = await axios.get(`${proxy}${url}`);
//     return heroProps;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default getHeroData;

export const getHeroProps = async (id) => {
  try {
    const props = await axios.get(
      `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`
    );
    return props.data;
  } catch (err) {
    console.error(err);
  }
};

export const getHeroData = async () => {
  try {
    const heroData = await axios.get(
      `https://hahow-recruit.herokuapp.com/heroes`
    );
    return heroData.data;
  } catch (err) {
    console.error(err);
  }
};
