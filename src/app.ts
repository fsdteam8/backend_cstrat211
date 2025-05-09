import express, { Request, Response } from "express";
import cors from "cors";
import categoryRouter from "./routes/category.routes";
import productRouter from "./routes/product.route";
import subCategoryRouter from "./routes/subCategory.routes";
import contactRouter from "./routes/contactRoutes";
import orderRouter from "./routes/order.routes";
import paymentRouter from "./routes/payment.routes";
import deliveryRouter from "./routes/delivery.routes";
import analysisRouter from './routes/analysis.routes';
import reviewRoutes from "./routes/reviewRoutes";
import refundRoutes from './routes/refundRoutes'
import contentRoutes from './routes/content.routes';

const app = express();

// required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(cors({ origin: "*" }));

// routes
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/subcategories", subCategoryRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/payments", paymentRouter);
app.use("/api/v1/deliveries", deliveryRouter);
app.use('/api/v1/analytics', analysisRouter);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/", refundRoutes);
app.use("/api/v1/content", contentRoutes);

export default app;
