import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Button, Dialog, DialogContent, CircularProgress } from "@mui/material";
import manipulation from "../data/manipulation";
import print from "../data/print";
import social from "../data/social";
import youtube from "../data/youtube";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // حالة تحميل البيانات
  const { id } = useParams();
  const navigate = useNavigate(); // استخدم useNavigate للتنقل بين الصفحات

  // تحسين الأداء باستخدام useMemo لاختيار البيانات
  const pageData = useMemo(() => {
    switch (id) {
      case "manipulation":
        return manipulation;
      case "print":
        return print;
      case "social":
        return social;
      case "youtube":
        return youtube;
      default:
        return [];
    }
  }, [id]);

  useEffect(() => {
    setIsLoading(true); // بداية التحميل
    setCurrentPage(pageData);
    setIsLoading(false); // انتهاء التحميل بعد تحديث البيانات
  }, [pageData]);

  const handleImageClick = useCallback((imgUrl) => {
    setSelectedImg(imgUrl);
    setOpenModal(true);
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImg(null);
  };

  // تحسين زر الرجوع لاستخدام navigate
  const handleBackClick = () => {
    navigate("/"); // التنقل إلى الصفحة الرئيسية بدون إعادة تحميل
  };

  return (
    <div className="flex flex-col flex-wrap justify-center bg-background_color">
      <div className="flex flex-col gap-3 p-5 text-primary">
        <h1 className="font-oswald text-[20px] md:text-[30px]">
          {id.toUpperCase()} items {currentPage.length}
        </h1>
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
          onClick={handleBackClick} // استخدام الـ handleBackClick هنا
        >
          Back
        </Button>
      </div>

      {/* إظهار سبينر أثناء تحميل البيانات */}
      {isLoading ? (
        <div className="flex h-[400px] items-center justify-center">
          <CircularProgress size={80} color="secondary" />{" "}
          {/* مؤشر التحميل مع تحسين الحجم واللون */}
        </div>
      ) : (
        <div className="bg-transparent flex flex-wrap justify-center gap-3">
          {currentPage.map((img) => (
            <img
              className="h-[300px] w-[300px] cursor-pointer"
              src={img.imgUrl}
              key={img.id}
              alt={img.id}
              loading="lazy" // lazy load الصور لتحسين الأداء
              onClick={() => handleImageClick(img.imgUrl)}
            />
          ))}
        </div>
      )}

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="xl"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "10px",
            border: "5px solid black",
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
                transform: "scale(1.2) rotate(120deg)",
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
