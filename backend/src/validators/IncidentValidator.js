const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  index(){
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    })
  },
  
  create(){
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().email(),
        value: Joi.number().required()
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  },

  delete(){
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    })
  } 
}