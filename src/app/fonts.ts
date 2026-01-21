import { Montserrat } from "next/font/google";

// export const montserratBold = Montserrat({ weight: "800", display: "swap", subsets: ["latin"], preload: true });
// export const montserratLightBold = Montserrat({ weight: "700", display: "swap", subsets: ["latin"], preload: true })
// export const montserratSemiBold = Montserrat({ weight: "600", display: "swap", subsets: ["latin"], preload: true });
// export const montserratSemiSemiBold = Montserrat({ weight: "500", display: "swap", subsets: ["latin"], preload: true });
// export const montserratNormal = Montserrat({ weight: "400", display: "swap", subsets: ["latin"], preload: true });
// export const rubikLight = Rubik({ weight: "300", display: "swap", subsets: ["latin"], preload: true });
// export const rubikReg = Rubik({ weight: "400", display: "swap", subsets: ["latin"], preload: true });
// export const rubikSemiBold = Rubik({ weight: "500", display: "swap", subsets: ["latin"], preload: true });
// export const rubikSemiBolder = Rubik({ weight: "600", display: "swap", subsets: ["latin"], preload: true });
// export const rubikBold = Rubik({ weight: "700", display: "swap", subsets: ["latin"], preload: true });

export const montserratBold = Montserrat({ weight: "800", display: "swap", subsets: ["latin"], preload: true });
export const montserratLightBold = montserratBold
export const montserratSemiBold = montserratBold
export const montserratSemiSemiBold = Montserrat({ weight: "500", display: "swap", subsets: ["latin"], preload: true });
export const montserratNormal = montserratSemiSemiBold
export const rubikReg = montserratSemiSemiBold
export const rubikLight = rubikReg

export const rubikSemiBold = rubikReg
export const rubikSemiBolder = montserratBold
export const rubikBold = rubikSemiBolder