function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='text-sm bg-slate-800 py-5 text-center text-white'>© {year} Rainbow Global Exim. All Rights Reserved.</div>
  )
}

export default Footer