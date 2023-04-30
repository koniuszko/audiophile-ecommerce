import nc, {NextHandler} from 'next-connect';
import createError from 'http-errors';
import {NextApiRequest, NextApiResponse} from "next";

interface ErrorResponse {
    message: string
}

const errorHandler = (
    err: createError.HttpError,
    req: NextApiRequest,
    res: NextApiResponse,
    next: NextHandler
) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    const errorResponse: ErrorResponse = {
        message,
    };

    res.status(statusCode).json(errorResponse);
};


const handler = nc<NextApiRequest, NextApiResponse>({
    onError: errorHandler,
})

export default handler;