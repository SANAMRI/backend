const express = require ("express")
const { fetchClient, createClient, updateClient, deleteClient } = require("../controller/client.controller")
const router = express.Router()

/**
 * @swagger
 * /clients/fetchClient:
 *   get:
 *     summary: return all clients
 *     responses: 
 *       200:
 *         description: bingo
 *  /clients/createClient:
 *    post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 * /clients/updateClient/:id:
 * put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 * /clients/deleteClient/:id:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
router.get("/fetchClient", fetchClient)
router.post("/createClient", createClient)
router.put("/updateClient/:id", updateClient)
router.delete("/deleteClient/:id", deleteClient)

module.exports=router
