import { useState } from "react";
import { Button } from "./ui/button";

const ImageUploadBlock = ({
  onImageChange,
  name = "image",
  alt,
}: {
  onImageChange: (file: File | null) => void;
  name?: string;
  alt?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);
      onImageChange(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedImage(file);
      onImageChange(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const triggerFileInput = () => {
    document.getElementById("imageUploadInput")?.click();
  };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer"
      onClick={triggerFileInput}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selectedImage ? (
        <div className="flex flex-col items-center">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="w-48 h-48 object-cover rounded-md mb-4"
          />
          <Button
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            Remove Image
          </Button>
        </div>
      ) : (
        <div className="text-gray-500">
          <p className="mb-2">Drag and drop, or click to select an image</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            name={name}
            alt={alt ?? name}
            id="imageUploadInput"
          />
          <label
            htmlFor="imageUploadInput"
            className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Choose Image
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUploadBlock;
