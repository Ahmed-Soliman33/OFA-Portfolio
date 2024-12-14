import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import manipulation from "../data/manipulation";
import print from "../data/print";
import social from "../data/social";
import youtube from "../data/youtube";
import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState([]);
  const [openModal, setOpenModal] = useState(false); // لحالة المودال
  const [selectedImg, setSelectedImg] = useState(null); // لتحديد الصورة التي ستظهر في المودال

  const { id } = useParams();

  useEffect(() => {
    switch (id) {
      case "manipulation":
        setCurrentPage(manipulation);
        break;
      case "print":
        setCurrentPage(print);
        break;
      case "social":
        setCurrentPage(social);
        break;
      case "youtube":
        setCurrentPage(youtube);
        break;
      default:
        setCurrentPage([]);
    }
  }, [id]);

  const handleImageClick = (imgUrl) => {
    setSelectedImg(imgUrl); // تخزين رابط الصورة
    setOpenModal(true); // فتح المودال
  };

  const handleCloseModal = () => {
    setOpenModal(false); // إغلاق المودال
    setSelectedImg(null); // إزالة الصورة المحددة
  };

  return (
    <div className="flex flex-col flex-wrap justify-center bg-background_color">
      <div className="flex flex-col gap-3 p-5 text-primary">
        <h1 className="font-oswald text-[20px] md:text-[30px]">
          {id.toUpperCase()} items {currentPage.length}
        </h1>
        <Link to="..">
          <Button
            sx={{
              transition: "all 0.3s ease-in-out",
              backgroundColor: "#6535F9",
              fontSize: "14px",
              width: "90px",
              height: "30px",
              color: "white",
              "&:hover": {
                backgroundColor: "#E65D42",
              },
            }}
            variant="contained"
            startIcon={<ArrowBack />}
          >
            Back
          </Button>
        </Link>
      </div>
      <div className="bg-transparent flex flex-wrap justify-center gap-3">
        {currentPage.map((img) => (
          <img
            className="h-[300px] w-[300px] cursor-pointer"
            src={img.imgUrl}
            key={img.id}
            alt={img.id}
            onClick={() => handleImageClick(img.imgUrl)}
          />
        ))}
      </div>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="xl"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.8)", // الخلفية السوداء
            borderRadius: "10px", // حواف مدورة
            border: "5px solid black", // الحدود السوداء حول الصورة
            position: "relative",
          },
        }}
      >
        <DialogContent>
          <img
            src={selectedImg}
            alt="Enlarged"
            className="h-full w-full scale-75 object-contain"
          />
          <Button
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              transition: "transform 0.3s ease-in-out",
              top: 5,
              right: 15,
              color: "red",
              fontSize: "2rem",
              "&:hover": {
                backgroundColor: "transparent",
                transform: "scale(1.2)",
                transform: "rotate(120deg)",
              },
            }}
          >
            &times;
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;
