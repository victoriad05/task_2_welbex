import React from 'react'
import { MainContainer, RedLight, RedBall, MainWrapper, LeftSide, Heading1, Heading2, Subtitle, RightSide, Title, OptionsContainer, OptionsWrapper, OptionsItem, OptionTitle, OptionDescr, Button, Span, MobileOptions, MobOptionsWrapper, MobOptionTitle, Line } from './MainStyles'
import bg from '../../images/bg.png'

const Main = () => {
  return (
    <>
        <MainContainer imageUrl={bg}>
            <MainWrapper>
              <LeftSide>
                <Heading1>Зарабатывайте больше</Heading1>
                <Heading2>c WELBEX</Heading2>
                <Subtitle>Развиваем и контролируем продажи за вас</Subtitle>
              </LeftSide>
              <RightSide>
                <Title>Вместе c <Span>бесплатной</Span> <Span>консультацией</Span> мы дарим:</Title>
                <OptionsContainer>
                  <OptionsWrapper>
                    <OptionsItem>
                      <OptionTitle>Виджеты</OptionTitle>
                      <OptionDescr>30 готовых решений</OptionDescr>
                    </OptionsItem>
                    <OptionsItem>
                      <OptionTitle>Dashboard</OptionTitle>
                      <OptionDescr>c показателями вашего бизнеса</OptionDescr>
                    </OptionsItem>
                  </OptionsWrapper>
                  <OptionsWrapper>
                    <OptionsItem>
                      <OptionTitle>Skype Аудит</OptionTitle>
                      <OptionDescr>отдела продаж и CRM системы</OptionDescr>
                    </OptionsItem>
                    <OptionsItem>
                      <OptionTitle>35 дней</OptionTitle>
                      <OptionDescr>использования CRM</OptionDescr>
                    </OptionsItem>
                  </OptionsWrapper>
                </OptionsContainer>
                <MobileOptions>
                <MobOptionsWrapper>
                      <MobOptionTitle><Line></Line>Skype аудит</MobOptionTitle>
                      <MobOptionTitle><Line></Line>Dashboard</MobOptionTitle>
                  </MobOptionsWrapper>
                <MobOptionsWrapper>
                      <MobOptionTitle><Line></Line>30 виджетов </MobOptionTitle>
                      <MobOptionTitle><Line></Line>Месяц amoCRM</MobOptionTitle>
                  </MobOptionsWrapper>
                </MobileOptions>
                <Button>Получить консультацию</Button>
                <RedBall></RedBall>
              </RightSide>
            </MainWrapper>
            <RedLight></RedLight>
        </MainContainer>
      
    </>
  )
}

export default Main
