import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Post from 'App/Models/Post'

export default class PostsController {
  // GET show/:idbarang 
  public async show ({ response, params }: HttpContextContract) {
    const barang = await Post.find(params.idbarang)
    response.abortIf(!barang, 'Barang not found', 404)
    return response.json(barang)
  }

  // GET showAll
  public async showAll ({}: HttpContextContract) {
    const barang = Post.all()
    return barang
  }

  // POST create barang
  public async create ({ request, response }: HttpContextContract) {
    const payload = await request.validate({
      schema: schema.create({
        nama_barang: schema.string(),
        qty: schema.string(),
        harga_beli: schema.string(),
        harga_jual: schema.string(),
      }),
    })

    const barang = await Post.create(payload)
    return response.json(barang)
  }

  // PUT update barang
  public async update ({ request, response, params }: HttpContextContract) {
    const barang = await Post.find(params.idbarang)
    response.abortIf(!barang, 'Post not found', 404)

    const payload = await request.validate({
      schema: schema.create({
        nama_barang: schema.string(),
        qty: schema.string(),
        harga_beli: schema.string(),
        harga_jual: schema.string(),
      }),
    })

    const updatedBarang = await Post.updateOrCreate({ idbarang: params.idbarang }, payload)
    return response.json(updatedBarang)
  }

  // DELETE barang by id
  public async delete ({ request, response, params }: HttpContextContract) {
    const barang = await Post.find(params.idbarang)
    response.abortIf(!barang, 'Barang not found', 404)
    barang?.delete()
    return response.json({})
  }
}
