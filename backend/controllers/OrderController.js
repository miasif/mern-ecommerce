import Order from "../models/Order.js";

const addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
};

const getMyOrders = async (req, res) => {
  const order = await Order.find({ user: req.user._id });
  res.status(200).json(order);
};

const getOrderById = async (req, res) => {
  const order = await Order.find(req.params.id).populate("user", "name email");
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
};

const updateOrderToPaid = async (req, res) => {
  res.send("updateOrderToPaid");
};

const updateOrderToDelivered = async (req, res) => {
  res.send("updateOrderToDelivered");
};

const getOrders = async (req, res) => {
  res.send("getOrders");
};

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
};
