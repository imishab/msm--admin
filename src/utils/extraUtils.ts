export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};


// utils/generateUserId.ts
export const generateUserId = (index: number) => {
    const randomNum = String(index + 1).padStart(3, "0"); // Ensures "001", "002", ...
    return `#FCA${randomNum}`;
  };
  

  export const getStatusColor = (status: string): string => {
    switch (status) {
        case "New":
            return "text-green-600"; // Green for New
        case "Inactive":
            return "text-red-600"; // Red for Inactive
        default:
            return "text-gray-600"; // Default gray for other statuses
    }
};
