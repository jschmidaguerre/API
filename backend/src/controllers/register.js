import userSchema from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';


const register = async (req, res) => {
    const {nombre, correo, contrasena} = req.body;


    userSchema.findOne({ correo }).then((usuario)=>{
        if(usuario){
            return res.json({mensaje: 'Ya existe un usuario con ese correo.'})
        } else if(!nombre || !correo || !contrasena){
            return res.json({mensaje: 'Falta el nombre, el correo o la contraseña, verifique por favor.'})
        } else {
            bcrypt.hash(contrasena, 10, (error, contraseñaHasheada) => {
                if(error) res.json({error});
                else{
                    const nuevoUsuario = new userSchema({
                        nombre,
                        correo,
                        contrasena: contraseñaHasheada
                    });
                    
                    nuevoUsuario.save()
                    .then((usuario)=>{
                        res.json({mensaje: 'El usuario se ha creado con exito.', usuario})
                    })
                    .catch((error)=>console.error(error))
                }
            })
        }
    })

}

export default register