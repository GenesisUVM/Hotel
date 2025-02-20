import FormBlogAdm from '../../componentes/FormBlogAdm';
import NavAdm from '../../componentes/NavAdm';
import './Adm.css'

/*Componente de vista del blog del hotel para el rol administrador*/

function BlogForm(){
    return(
        <>
        <NavAdm />
        <FormBlogAdm />
        </>
    )
};

export default BlogForm;