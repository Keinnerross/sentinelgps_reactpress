const PrimaryButton = ({ textBtn, negative, long }) => {

    console.log(long)

    return (


        <div className={`${negative ? "bg-white border-[1px] border-solid border-black" : "text-white bg-blue-600"} rounded-[18px] cursor-pointer ${long ? "w-[300px] py-[10px] px-4 " : "w-[100px] py-2 px-4 "} flex items-center justify-center`}>
            {textBtn}
        </div >

    )
}

export default PrimaryButton;