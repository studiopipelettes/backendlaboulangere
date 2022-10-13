import { Router } from "express"
import cors from "cors"
import { projectConfig } from "../../medusa-config"

export default () => {
  const router = Router()

  const corsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true,
  }

  router.get("/store/hello", cors(corsOptions), async (req, res) => {
    // const productService = req.scope.resolve("ProductService")
    console.log(req.scope.resolve("ProductService"))
    // const [product] = await productService.list()
    // console.log(product)
    // res.json({
    //   message: `Welcome to ${product}!`
    // })
  })

  return router
}