import FormBlogAdm from '../../componentes/FormBlogAdm';
import NavAdm from '../../componentes/NavAdm';
import './Adm.css'

/*Componente de vista del blog del hotel para el rol administrador*/

function BlogForm(){
    return(
        <>
        <NavAdm />
        <h2>Formlario articulos del blog</h2>
        <FormBlogAdm />
        </>
    )
};

export default BlogForm;