import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const AboutUs: React.FC = () => {
	return (
		<>
			<section className="section">
				<Container>
					<SectionHeader>
						<>Sobre mim</>
					</SectionHeader>
					<div className="clearfix" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<p>Diretor de tecnologia Staart, Devaria e Verzel
						</p>
					</div>
					<div className="short-info" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<ul className="list-unstyled">
							<li>
								<span className="first">Nome:</span>
								<span className="second">Rafael Thomazelli</span>
							</li>
							<li>
								<span className="first">Idade:</span>
								<span className="second">34</span>
							</li>
							<li>
								<span className="first">Nascimento:</span>
								<span className="second">11/03/1989</span>
							</li>
							<li>
								<span className="first">Cidade:</span>
								<span className="second">São Paulo</span>
							</li>
							<li>
								<span className="first">Formação:</span>
								<span className="second">Pós graduação completa</span>
							</li>
							<li>
								<span className="first">E-mail:</span>
								<span className="second"><a href="mailto:rafael@verzel.com.br">rafael@verzel.com.br</a></span>
							</li>
							<li>
								<span className="first">Telefone:</span>
								<span className="second">(11) 9 3214-5869</span>
							</li>
						</ul>
					</div>
				</Container>
			</section>
		</>
	)
}

AboutUs.displayName = "About US";
export default AboutUs;