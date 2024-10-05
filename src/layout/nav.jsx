import PrimaryButton from "../common/buttons/primaryButton"

const Nav = ({ flex }) => {
    return (
        <div>
            <ul className={`${flex ? "flex gap-[20px] items-center" : ""}`}>
                <li className="cursor-pointer">Soluciones</li>
                <li className="cursor-pointer">Ventajas</li>
                <li className="cursor-pointer">Recursos</li>
                <li className="cursor-pointer">Sobre Nosotros</li>
                <PrimaryButton textBtn="Acceder" negative={true} />
                <PrimaryButton textBtn="Cotizar" />
            </ul>
        </div>
    )
}

export default Nav;