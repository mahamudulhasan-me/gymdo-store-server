import { Response } from "express";

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
  data: T;
}

// const isEmpty = (data: any): boolean => {
//   if (Array.isArray(data)) {
//     return data.length === 0;
//   } else if (typeof data === "object" && data !== null) {
//     return Object.keys(data).length === 0;
//   }
//   return !data;
// };

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  // if (isEmpty(data.data)) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "No Data Found",
  //     data: Array.isArray(data.data) ? [] : null,
  //   });
  // }

  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    token: data.token,
    data: data.data,
  });
};

export default sendResponse;
