'use client'
import React, { useState } from "react";

const AdminPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<string[]>([]); // Simulated file list
  const [editFileName, setEditFileName] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        // Store file content in localStorage (simulating backend)
        localStorage.setItem(selectedFile.name, fileContent);
        setFileList([...fileList, selectedFile.name]);
        setSelectedFile(null);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleDelete = (fileName: string) => {
    localStorage.removeItem(fileName);
    setFileList(fileList.filter((file) => file !== fileName));
  };

  const handleEdit = () => {
    if (editFileName && selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        // Replace file content in localStorage
        localStorage.setItem(editFileName, fileContent);
        setFileList(fileList.map(file => file === editFileName ? selectedFile.name : file));
        setSelectedFile(null);
        setEditFileName('');
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Page</h2>

      {/* Upload Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <form>
          <label className="block text-lg font-medium text-gray-700 mb-2">Select a file:</label>
          <input 
            type="file" 
            onChange={handleFileUpload} 
            className="block w-full text-gray-700 px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button 
            type="button" 
            onClick={handleUpload} 
            disabled={!selectedFile} 
            className={`px-4 py-2 rounded-md text-white ${selectedFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Upload
          </button>
        </form>
      </div>

      {/* Current Files Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Files</h3>
        <ul>
          {fileList.map((file, index) => (
            <li key={index} className="flex justify-between items-center mb-3">
              <span className="text-gray-700">{file}</span>
              <div>
                <button 
                  onClick={() => setEditFileName(file)} 
                  className="px-3 py-1 mr-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(file)} 
                  className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Section */}
      {editFileName && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Edit {editFileName}</h3>
          <form>
            <label className="block text-lg font-medium text-gray-700 mb-2">Replace with:</label>
            <input 
              type="file" 
              onChange={handleFileUpload} 
              className="block w-full text-gray-700 px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button 
              type="button" 
              onClick={handleEdit} 
              disabled={!selectedFile} 
              className={`px-4 py-2 rounded-md text-white ${selectedFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Replace
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
