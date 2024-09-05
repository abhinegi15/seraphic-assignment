import React from 'react';
import Widget, { Cards } from 'components/Widget';
import { WidgetHeader } from 'components/Widget';
import ProgressBar from 'components/ProgressBar';
import Button from 'components/Button';
import TimelineItem, { CalendarItem } from 'components/TimeLine';
import RadialBarChart from 'components/Chart';
// profile section start
const Profile = () => {
  return (
    <>
      <div className='d-flex align-items-center gap-4 col-md-8'>
        <div className='profile'>
          <h1>CL</h1>
        </div>

        <div className='profile-details'>
          <h2>Carlos Lana</h2>
          <button className='me-2'>
            <i className="fa-solid fa-check me-2" />
            Verified
          </button>
          <i className="fa-solid fa-arrow-rotate-right" />
          <div className='contact-info'>
            <ul className='p-0  pt-3 d-flex gap-3 bg-white'>
              <li>
                <a href='mailto:carloslana@gmail.com'>
                  <i className="fa-solid fa-envelope" />carloslana@gmail.com</a>
              </li>

              <li>
                <a href='tel:340213654789'>
                  <i className="fa-solid fa-phone" />+34 0213654789</a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className='reward-points-wrapper col-md-4 d-flex flex-column'>
        <div className='reward-points d-flex align-items-center justify-content-center gap-3 p-4'>
          <i className="fa-solid fa-wallet" />
          <h4>Reward Points</h4>
        </div>
        <div className='points'>
          250
        </div>
      </div>
    </>
  )
}

// profile section end

// skor section start

const Skor = () => {

  // dummy data

  const scoreDetails = [
    {
      id: 1,
      lable: 'Financial Skor',
      progress: 620,
      color: 'linear-gradient(90deg, #F23D3D 0%, #FFED47 45.3%, #FFED47 79.4%, #C3DB5A 100%)',
      target: '800'
    },
    {
      id: 2,
      lable: 'Rental Skor',
      progress: 40,
      color: '#A392EF',
      target: '200'
    },
  ]

  const ChartData = {
    series: [44, 55, 67, 83],
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    colors: ['#F3483E', '#F77841', '#F5DD01' , '#B4CC23', '#EEEEEE'],
  };
  
  return (
    <>
      <WidgetHeader title='Skor' link='profile-shared' text='View All Details' rightArrow={true} />
      <Cards title='Total Skor' children={
      <>
      <RadialBarChart series={ChartData.series} labels={ChartData.labels} colors={ChartData.colors} />
      <div className='chart-info'>
        <h2>Carlos Lana</h2>
        <div>
        <p>*Bank Account Used For Scoring*</p>
        <p>Based On Given Details </p>
      </div>
      </div>
      </>
        } 
        />

      <Cards title='Score Details'
        children={
          scoreDetails.map((item) =>
            <ProgressBar lable={item.lable} progress={item.progress} color={item.color} target={item.target} />
          )
        } />

      <div className='row w-100 mt-3'>
        <div className='col-md-6 d-flex justify-content-between'>
          <Button
            text='Regenerate Financial Score'
            startAdornment={<i className="fa-solid fa-arrows-rotate pe-2" />}
            style={{
              border: '2px solid var(--green)',
              borderBottom: '2px solid var(--green)',
              borderRadius: '12px',
              padding: '10px 20px',
            }}
          />

          <Button
            text='Add More Documents'
            startAdornment={<i className="fa-solid fa-file pe-2" />}
            style={{
              border: '2px solid #F4F4F4',
              borderBottom: '2px solid #F4F4F4',
              borderRadius: '12px',
              padding: '10px 20px',
              background: '#F4F4F4',
            }}
          />
        </div>

        <div className='col-md-6 d-flex justify-content-end'>

          <Button
            text='Share Profile With Landlord'
            startAdornment={<i className="fa-solid fa-share-nodes pe-3" />}
            style={{
              border: '2px solid var(--green) ',
              borderBottom: '2px solid var(--green) ',
              borderRadius: '12px',
              padding: '10px 30px',
              background: 'var(--green)',
            }}
          />
        </div>
      </div>
    </>
  )
}

// skor section end


// Rent Details section start
const RentDetails = () => {
  const items = [
    { isComplete: true, points: 50 },
    { isComplete: true, points: 50 },
    { isComplete: true, points: 50 },
    { isComplete: true, points: 50 },
    { isComplete: false, points: null },
  ];

  const CalItems = [
    { month: 'Mar', date: '05', year: '2024', isComplete: true },
    { month: 'Apr', date: '05', year: '2024', isComplete: true },
    { month: 'May', date: '05', year: '2024', isComplete: true },
    { month: 'June', date: '05', year: '2024', isComplete: true },
    { month: 'July', date: '05', year: '2024', isComplete: false },
  ];

  return (
    <>
      <WidgetHeader title='Rent Details' link='profile-shared' text='View All Details' rightArrow={true} />
      <Cards title='Address' className='card rent-card'
        children={
          <div className='rent-details-content mt-5'>
            <i className="fa-solid fa-house" />
            <h5 className='mt-3'>Virgen del Puerto</h5>
            <p className='text-white'>Carretera Nacional II, San Fernando de Henares, Madrid, 28830</p>
          </div>
        }
      />

      <Cards title='Milestones and gamification'
        children={
          <>
            <ul className="timeline d-flex gap-5 ps-0 pt-3 pb-0">
              {items.map((item, index) => (
                <TimelineItem
                  key={index}
                  isComplete={item.isComplete}
                  points={item.points}
                />
              ))}
            </ul>

            <ul className='calendar d-flex flex-wrap gap-4 ps-0 pt-3 pb-0'>
              {CalItems.map((item, index) => (
                <CalendarItem
                  key={index}
                  month={item.month}
                  date={item.date}
                  year={item.year}
                  isComplete={item.isComplete}
                />
              ))}
            </ul>
          </>
        }
      />
    </>
  )
}
// Rent Details section end

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Widget children={<Profile />} />
        <Widget children={<Skor />} />
        <Widget children={<RentDetails />} />
        <div className='bottom-bar row pt-5'>
           <div className='col-md-6'>
              <h4>Pay Your Monthly Rent</h4>
              <p>Pay your next rent payment through Skor and keep earning points while improving your rental history.</p>
           </div>

           <div className='d-flex col-md-6 justify-content-end'>
           <Button
            text='Pay Now'
            style={{
              border: '2px solid var(--green) ',
              borderBottom: '2px solid var(--green) ',
              borderRadius: '12px',
              padding: '10px 50px',
              background: 'var(--green)',
            }}
          />
           </div>
        </div>
      </div>

    </div>
  )
}

export default Home
