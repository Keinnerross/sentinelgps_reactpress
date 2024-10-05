


const CardImg = ({ url }) => {
    return (
            <div
                className="min-h-[280px] w-[30%] rounded-[12px] cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${url})` }}
            >
                {/* Aquí puedes añadir más contenido si es necesario */}
            </div>
    );
};

export default CardImg;