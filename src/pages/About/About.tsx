import React from "react"
import {
  Container,
  Section1,
  SectionBar,
  SectionTeam,
  TeamCard,
  TeamContent
} from "./About.styled"
import { Paragraph, Title } from "@component/Text"
import aboutPic1 from "@asset/aboutPic.png"
import aboutPic2 from "@asset/aboutPic2.png"

import isabelPic from "@asset/teamPics/isabel.jpeg"
import leonardoPic from "@asset/teamPics/leonardo.jpeg"
import nicollyPic from "@asset/teamPics/nicolly.jpeg"
import tayllaPic from "@asset/teamPics/taylla.jpeg"
import silasic from "@asset/teamPics/silas.jpeg"
import Image from "@component/Image/Image"

const About = () => {
  return (
    <Container>
      <Section1>
        <Title size="2xl" color="black">
          Quem somos e o que fazemos?
        </Title>
        <Paragraph size="lg">
          A agência de viagens, Viaja SP, é uma empresa turística que tem como
          maior objetivo criar um ciclo turístico por todas as cidades do Estado
          de São Paulo, desde cidades populares, até cidades desconhecidas que
          possuem um grande potencial turístico não explorado.
        </Paragraph>
        <img src={aboutPic1} alt="" />
      </Section1>
      <SectionBar>
        <img src={aboutPic2} alt="" />
        <div>
          <Title size="md" color="white100">
            Missão
          </Title>
          <Paragraph size="lg" color="white100">
            Quanto a missão a empresa Viaja SP tem como objetivo trazer cultura
            e conhecimento para os passageiros, com viagens acessíveis e seguras
            para todos.
          </Paragraph>
          <Title size="md" color="white100">
            Visão
          </Title>
          <Paragraph size="lg" color="white100">
            A agência visa conhecer ainda mais o Estado de São Paulo, assim
            aumentando suas opções de pacotes de viagem, e dando mais
            oportunidades para cada vez mais pessoas viajarem e conhecerem esses
            lugares.
          </Paragraph>
        </div>
      </SectionBar>
      <SectionTeam>
        <Title size="xl" color="black">
          Nossa equipe
        </Title>
        <TeamContent>
          {teamData.map((member) => (
            <TeamCard>
              <Image src={member.img} />
              <div>
                <Title size="sm" color="black">
                  {member.name}
                </Title>
                <Paragraph size="md">{member.role}</Paragraph>
              </div>
            </TeamCard>
          ))}
        </TeamContent>
      </SectionTeam>
    </Container>
  )
}

const teamData = [
  {
    id: 1,
    name: "Isabel de Jesus",
    role: "UI/UX Designer",
    img: isabelPic
  },
  {
    id: 2,
    name: "Leonardo Gonsalez",
    role: "Desenvolvedor",
    img: leonardoPic
  },
  {
    id: 3,
    name: "Nicolly Freitas",
    role: "Idealizadora",
    img: nicollyPic
  },
  {
    id: 4,
    name: "Taylla Felix",
    role: "Contadora",
    img: tayllaPic
  },
  {
    id: 5,
    name: "Silas Brito",
    role: "Gerente geral",
    img: silasic
  }
]

export default About
