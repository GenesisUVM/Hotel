import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'imgs' && file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else if (file.fieldname === 'pdf' && file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Tipo de archivo no permitido'), false);
        }
    },
});

export const uploadMiddleware = upload.fields([
    { name: 'imgs', maxCount: 5 }, // Asegúrate de que este nombre coincida
    { name: 'pdf', maxCount: 1 },
]);