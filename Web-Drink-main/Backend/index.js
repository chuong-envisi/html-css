
const port = 3000
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const { type } = require("os")
const { error } = require("console")
require('dotenv').config();


app.use(express.json())

app.use(cors())

mongoose.connect(process.env.MONGO_URL)

const storage = multer.diskStorage({
    destination: './upload/images/products',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/products/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})


class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a node into the tree
    insert(value) {
      const newNode = new BinaryTreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value.name < node.value.name) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }

    countNodes(node = this.root) {
      if (!node) return 0;
      return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    

    async getData(){
      const products = await Product.find({})
      products.forEach((product) => this.insert(product))
    }
  
    // In-order traversal
    InOrder(node = this.root, result = []) {
      if (node) {
        this.InOrder(node.left, result);
        result.push(node.value);
        this.InOrder(node.right, result);
      }
      return result;
    }

    searchByName(node = this.root, result = [], name) {
      if (node) {
        this.searchByName(node.left, result);
        if(node.value.name.includes(name)) result.push(node.value);
        this.searchByName(node.right, result);
      }
      return result;
    }

    deleteNode(value, node = this.root) {
      if (!node) return null;
  
      
      if (value < node.value.name) {
        node.left = this.deleteNode(value, node.left);
      } else if (value > node.value.name) {
        node.right = this.deleteNode(value, node.right);
      } else {
       
        if (!node.left && !node.right) {
          return null;
        }
  
        
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
  
        
        const successor = this.findMin(node.right);
        node.value = successor.value;
        node.right = this.deleteNode(successor.value.name, node.right);
      }
      return node;
    }
  
    
    findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    
  }

const binaryTree = new BinaryTree()
binaryTree.getData()

app.get('/binary-tree/search', async (req, res) => {
  console.log(binaryTree)
  const { name } = req.query;
  const result = binaryTree.searchByName(name);
  if (result) {
    res.json({ success: true, product: result.value });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

app.post('/addproduct', (req, res) => {
  try {
      const id = binaryTree.countNodes() + 1;

      const product = {
          id: id,
          name: req.body.name,
          image: req.body.image,
          category: req.body.category,
          price: req.body.price,
          sold: req.body.sold,
      };

      binaryTree.insert(product);

      console.log("Product added to binary tree:", product);
      res.json({
          success: true,
          message: "Product added successfully",
          product,
      });
  } catch (err) {
      console.error("Error adding product to binary tree:", err);
      res.status(500).json({ success: false, error: err.message });
  }
});


app.delete('/removeproduct', async(req, res) => {
  const { name } = req.body;
  try {
    binaryTree.root = binaryTree.deleteNode(name);
    res.json({ success: true, message: `Deleted node with name: ${name}` });
  } catch (err) {
    console.error("Error deleting node:", err);
    res.status(500).json({ success: false, error: err.message });
  }
})

app.get('/allproduct', (req, res) => {
  const sortedProducts = binaryTree.InOrder();
  
  res.send(sortedProducts)
})
















const Order = mongoose.model('Order', {
  id: {
      type: Number,
      required: true,
  },
  name:{
    type: String,
  },
  email:{
    type: String,
    unique: true
  },
  SDT:{
    type: String,
  },
  cartData:{
    type: Object,
  },
  total: {
    type: Number,
  },
  status:{
    type: Boolean,
    default: false,
  },
  date:{
    type: Date,
    default: Date.now,
  },
})

class BinaryTreeOrderNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeOrder {
  constructor() {
    this.root = null;
  }

  // Insert a node into the tree
  insert(value) {
    const newNode = new BinaryTreeOrderNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value.id < node.value.id) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  countNodes(node = this.root) {
    if (!node) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  

  async getData(){
    const products = await Order.find({})
    products.forEach((product) => this.insert(product))
  }

  // In-order traversal
  InOrder(node = this.root, result = []) {
    if (node) {
      this.InOrder(node.left, result);
      result.push(node.value);
      this.InOrder(node.right, result);
    }
    return result;
  }


  deleteNode(value, node = this.root) {
    if (!node) return null;
    if (value < node.value.id) {
      node.left = this.deleteNode(value, node.left);
    } else if (value > node.value.name) {
      node.right = this.deleteNode(value, node.right);
    } else {
     
      if (!node.left && !node.right) {
        return null;
      }

      
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      
      const successor = this.findMin(node.right);
      node.value = successor.value;
      node.right = this.deleteNode(successor.value.name, node.right);
    }
    return node;
  }

  
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  
  searchById(id, node = this.root) {
    if (!node) return null;
    if (id === node.value.id) return node; 
    if (id < node.value.id) {
        return this.searchById(id, node.left); 
    }
    return this.searchById(id, node.right); 
  }

}

const orderBinaryTree = new BinaryTreeOrder()
orderBinaryTree.getData()


app.post('/updatestatus', async (req, res) => {
  try {
    const { id } = req.body; // Lấy ID từ request body
    const orderNode = orderBinaryTree.searchById(id); // Tìm đơn hàng trong cây nhị phân

    if (!orderNode) {
      return res.status(404).json({ success: false, message: `Order with ID ${id} not found` });
    }

    orderNode.value.status = true;

    const updatedOrder = await Order.findOneAndUpdate(
      { id: id },
      { status: true },
      { new: true } 
    );

    if (!updatedOrder) {
      return res.status(500).json({ success: false, message: `Failed to update status in database for order ID ${id}` });
    }

    res.json({ 
      success: true, 
      message: `Order ID ${id} status updated successfully`, 
      order: updatedOrder 
    });
  } catch (err) {
    console.error("Error updating status:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/allorder', (req, res) => {
  const sortedProducts = orderBinaryTree.InOrder();
  
  res.send(sortedProducts)
})

app.post('/addorder', (req, res) => {
  try {
      
      const id = orderBinaryTree.countNodes() + 1;

      
      const order = {
          id: id,
          name: req.body.name,
          email: req.body.email,
          SDT: req.body.SDT,
          cartData: req.body.cartData,
          total: req.body.total,
          
      };

      orderBinaryTree.insert(order);

      const dbOrder = new Order(order);
      dbOrder.save();

      res.json({
          success: true,
          message: "Order added successfully",
          order,
      });
  } catch (err) {
      console.error("Error adding order:", err);
      res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})