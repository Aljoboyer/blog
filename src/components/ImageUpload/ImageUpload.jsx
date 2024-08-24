import React, { useEffect, useState } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";

const ImageUpload = (props) => {
    const {
        preview, 
        setPreview,
        setImgData,
        imgData,
        imgErr,
        editId
    } = props;

    useEffect(() => {
        if (imgData) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(imgData);
        }
    }, [imgData]);

    const handleImageChange = (file) => {
        console.log('Selected >>>', file);
        setImgData(file)
    };

    return (
        <div className='my-7'>
            
        <div className='text-center px-4 pt-7 pb-6 border-2 border-gray-300 border-dashed rounded-lg w-full h-auto '>
            <div className='flex flex-row justify-center'>
                {preview ? 
                <img
                src={(editId && !imgData) ? `data:image/jpeg;base64,${preview}` : preview}
                alt=""
                className="w-300 h-300"
                />
            : <MdAddPhotoAlternate size={80}/>}
            </div>
           <div className="space-y-1 justify-center align text-center">
                <div className="flex text-sm text-gray-600">
                    <label
                        htmlFor="images"
                        className=" mx-auto relative cursor-pointer bg-white rounded-md font-normal text-base block"
                    >
                        <p className="px-4 my-2 rounded-full py-1 w-fit mx-auto text-white bg-blue-900">
                            {editId ? 'Update Image' : 'Add Image'}
                        </p>
                        
                    </label>
                    <input
                        id="images"
                        name="images"
                        type="file"
                        className="sr-only"
                        accept="image/png, image/jpeg"
                        // required
                        onChange={(e) => handleImageChange(e.target.files[0])}
                    />
                </div>
            </div>
            {/* showing error message */}
            {imgErr && (
                <p className="font-medium text-red-600 mt-2">{imgErr}</p>
            )}
        </div>
        </div>
    );
};

export default ImageUpload;
