import { useCallback } from 'react';
import { Image } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom/dist';

const MyDropzone = ({ onFileDrop }) => {
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the dropped files
        onFileDrop(acceptedFiles);
    }, [onFileDrop]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="my-dropzone">
            <input {...getInputProps()} />
            <div className='text-center'>
                <Image src="Add.png" style={{width:40, height:50}}/>
                <p className='mb-0'>Drag and Drop Images</p>
                <Link to={"#"} style={{fontSize: 12}}>Or Browse</Link>
            </div>
        </div>
    );
};

export default MyDropzone;
