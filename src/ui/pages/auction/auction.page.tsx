import React from 'react';
import { AnnounceTopSearched, ScheduleSection, LearnAdvantages, Depositions } from '../../organisms';
import { FAQ } from '../../organisms';

export const AuctionPage = () => {

  return (
    <>
      <AnnounceTopSearched/>
      <ScheduleSection/>
      <LearnAdvantages/>
      <Depositions/>
      <FAQ/>
    </>
  )
}