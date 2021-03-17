import axios from "axios";
import jwt from "jwt-encode";

/**
 * Agregar un nuevo proyecto a la base de datos
 * @param {JSON} user Objeto con la información del usuario
 * @param {String} projectName nombre del proyecto creado
 * @returns {Array} proyectos del usuario o error
 */
const postProject = async (user, projectName) => {
    const userInfo = {
        user_id: user.uid,
        project_name: projectName
    };
    const token = jwt(userInfo, 'secret');
    try {
        const response = await axios.post("/proyectos/", {
            token: token
        });
        return response.data;
    }
    catch(error) {
        return "Error";
    }
}

/**
 * Eliminar un proyecto de la base de datos
 * @param {JSON} user Objeto con la información del usuario
 * @param {Integer} index índice del proyecto
 * @returns proyectos del usuario o error
 */
const deleteProject = async (user, index) => {
    const userInfo = {
        user_id: user.uid,
        project_index: index
    };
    const token = jwt(userInfo, 'secret');
    try {
        const response = await axios.delete("/proyectos", {
            data: {
                token: token
            }
        });
        return response.data;
    }
    catch(error) {
        return "Error";
    }
}   

export {
    postProject,
    deleteProject,
}