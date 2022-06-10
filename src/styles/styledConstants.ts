export const ColorConstants = {
  BTN_COLOR: "rgb(219, 82, 77)",
};

const SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "500px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const mediaDevices = {
  mobileS: `(max-width: ${SIZES.mobileS})`,
  mobileM: `(max-width: ${SIZES.mobileM})`,
  mobileL: `(max-width: ${SIZES.mobileL})`,
  tablet: `(max-width: ${SIZES.tablet})`,
  laptop: `(max-width: ${SIZES.laptop})`,
  laptopL: `(max-width: ${SIZES.laptopL})`,
  desktop: `(max-width: ${SIZES.desktop})`,
};
