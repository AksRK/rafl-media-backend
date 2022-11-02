import CreatorModel from "../models/Creator.js";

export const getAll = async (req, res) => {

    try {
        const creators = await CreatorModel.find()
        res.json(creators)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить список креаторов',
        })
    }
}

export const getOne = async (req, res) => {

    try {
        const creator = await CreatorModel.find({_id:req.params.id})
        res.json(creator)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить список креаторов',
        })
    }
}

export const remove = async (req, res) => {

    try {
        const creatorId = req.params.id

        CreatorModel.findOneAndDelete({
            _id: creatorId,
        }, (err, doc) => {
            if (err) {
                return res.status(500).json({
                    message: 'Не удалось удалить креатора'
                })
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'Креатор не найден'
                })
            }

            res.json({
                success: true,
            })
        })
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить креаторов',
        })
    }
}

export const create = async (req, res) => {

    try {
        const doc = new CreatorModel({
            fullName: req.body.fullName,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
        })

        const creator = await doc.save()
        res.json(creator)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось добавить креатора',
        })
    }
}

export const update = async (req, res) => {

    try {
        const creatorId = req.params.id

        await CreatorModel.updateOne({
            _id: creatorId,
        }, {
            fullName: req.body.fullName,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
        })

        res.json({
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить данные креатора'
        })
    }
}