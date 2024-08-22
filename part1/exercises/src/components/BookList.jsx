export default function BookList() {
   let pageTitle = "Read Ahead for Awesome Books!";
   let book1 = "https://cdn.kobo.com/book-images/69b33606-d7b9-4651-b546-a528bb465a42/1200/1200/False/onyx-storm-1.jpg";
   let book2 = "https://m.media-amazon.com/images/I/819LZGd7HFL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://prodimage.images-bn.com/pimages/9781915202413_p0_v1_s600x595.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height="300" alt="Onyx Storm" />
         <img src={book2} height="300" alt="When the Moon Hatched" />
         <img src={book3} height="300" alt="Valley" />
      </div>      
   );
}