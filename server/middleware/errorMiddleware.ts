import { NextFunction } from "express"

const errorHandler = (err: { message: string; stack: string },
    req: any,
    res: {
        statusCode: number;
        status: (arg0: number) => void;
        json: (arg0: { message: string; stack: string | null }) => void;
    },
    next: NextFunction,
) => {
    const statusCode: number = req.statusCode ? req.statusCode : 500

    res.status(statusCode)
    res.json({
        message: err.message,
        stack: ""
    })
}

export default errorHandler
