import admin from "../config/firebase";

export const requireRole = (roles: string[]) => {
    return async (req: any, res: any, next: any) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            const decoded = await admin.auth().verifyIdToken(token);
            if (!roles.includes(decoded.role)) return res.status(403).send("Forbidden");
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).send("Unauthorized");
        }
    };
};