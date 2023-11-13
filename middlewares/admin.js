//Verificacion admin

export const isAdmin = (req,res,next) => {
    //Verificar rol de admin
    const {role} = req.user;

    if (role === 'admin') {
        next()
    } else {
        return res.render('404',{errorMessage: 'No posee rol de administrador'})
    }
}