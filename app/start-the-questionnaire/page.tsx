'use client';
import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

import { startNewQuestionnaire } from '@/actions/actions';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function StartTheQuestionnaire() {
  const session = useSession();
  const accessKey = session?.data?.user?.name ?? null;
  const router = useRouter();
  const theme = useTheme();

  const handleStartQuestionnaire = () => {
    startNewQuestionnaire(accessKey, router);
  };

  return (
    <MainBox>
      <Head>
        <title>Lintu - Start the questionnaire</title>
      </Head>

      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/business-product-planning-and-research.png'}
          imgAlt={
            'our analytics are thinking about the best investment strategy for you'
          }
          titleText={'Creating a new investment portfolio'}
          mainText={
            "Answer 38 questions and we'll create a unique, personalized portfolio for you"
          }
          buttonText={'Start the questionnaire'}
          onClick={handleStartQuestionnaire}
        />
      </Container>
    </MainBox>
  );
}
