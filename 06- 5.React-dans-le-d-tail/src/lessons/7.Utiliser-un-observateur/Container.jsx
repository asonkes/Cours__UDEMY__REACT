import {useEffect, useRef} from "react";
import "./Container.css";

// Un observateur va nous permettre de voir quand un élément va arriver
// Dans le viewport, dans la partie visible de notre navigateur
// Très pratique pour des animations au scroll
// Pour faire apparaître des éléments
// useEffect ==> car justement doit être fait 1 fois !!!!

// useEffcet effectue le code après que REACT ai mis le composant dans le DOM
export default function Container() {

  const newsletterRef = useRef();

  // Là mon observateur va tourner 1fois, 
  // Seulement après la 1ere apparition dans le DOM
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      console.log(entries);

      {/** Donc une fois que l'animation a été faite, 
      Je ne veux plus l'observer
      */}
      if(entries[0].isIntersecting) {
        newsletterRef.current.classList.add("active");
        observer.unobserve(newsletterRef.current);
      }
    });

    observer.observe(newsletterRef.current);

    {/** Ici c'est une cleanUp fonction qui va se lancer qd mon composant va se détruire */}
    return() => {
      observer.unobserve(newsletterRef.current);
    }
  }, []);

  return (
    <div className="container">
      <h1>Utiliser un observateur</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Iusto magnam est numquam minus qui inventore, 
        voluptatum modi nemo eos expedita, impedit officiis nulla atque 
        corrupti dolorem voluptatem quia vel facilis laudantium amet labore 
        molestias nihil. Debitis porro eveniet veritatis aspernatur fuga deleniti 
        ipsam quo nobis dolorem cumque a ab, inventore atque tempora quisquam 
        quidem laudantium numquam enim vel quam sit commodi. A nobis natus 
        aspernatur ipsa labore totam reprehenderit debitis! Sunt dignissimos 
        laborum eum pariatur ut at nisi! A, placeat quisquam iusto repudiandae 
        ab pariatur expedita quibusdam beatae ducimus incidunt sapiente fugiat 
        autem architecto eaque itaque quos, repellendus cupiditate officia 
        maiores! Aperiam, aspernatur vitae eligendi porro modi similique 
        expedita ut sit! Soluta ipsam minima eos quidem a officia harum possimus 
        hic consequuntur magni adipisci iste, repellendus placeat nam. Beatae 
        error cupiditate iste incidunt in voluptate totam! Libero placeat 
        provident ex et nobis doloremque vitae vero ratione consectetur pariatur 
        eligendi a ad distinctio architecto fugiat molestiae reiciendis 
        praesentium alias, unde atque consequatur veniam. Minima porro 
        minus magni, et ut odio eos perferendis commodi provident quia non 
        quos possimus maxime necessitatibus architecto harum amet beatae 
        incidunt delectus, iure cupiditate. Soluta velit sapiente, officia est 
        illum amet cum magnam rerum possimus voluptate at nam esse quaerat alias 
        tempore omnis illo vitae expedita beatae earum tempora dolore nostrum 
        laborum. Magni nobis dolorum doloremque natus in molestias optio, 
        corrupti officia esse accusamus laboriosam iusto voluptatum sint nisi 
        velit tenetur obcaecati quia omnis fuga, mollitia deleniti excepturi 
        neque itaque. Inventore architecto consectetur voluptatum cupiditate 
        tenetur, fugiat vitae tempora dolores excepturi eligendi officiis 
        reprehenderit non veniam necessitatibus nulla doloribus quam quis aperiam, 
        obcaecati in quod libero culpa. Voluptatibus alias eos doloribus 
        assumenda veritatis consequuntur ducimus explicabo illo, culpa, 
        dicta adipisci minima aliquam voluptate. Architecto molestias deleniti 
        doloremque necessitatibus eveniet explicabo reiciendis expedita illo 
        tempora aliquid iste dignissimos at veniam, cum nam. Aliquam voluptate 
        consequuntur quibusdam ducimus ex rem tempore dolor voluptas saepe 
        consequatur accusamus voluptatem architecto pariatur necessitatibus 
        minus expedita autem repellat possimus labore minima, soluta atque. 
        A at asperiores quod molestias beatae obcaecati quae sunt repellendus 
        excepturi, nisi pariatur numquam, voluptatem amet magnam fugit, 
        corrupti sequi! Eius facere alias aspernatur cupiditate, id totam. 
        Culpa magni iure velit nostrum! Dolores eaque assumenda illum! Aut, 
        illo nesciunt vero dolores sunt ducimus. Itaque est, doloremque 
        perspiciatis a nostrum nesciunt cum odio id eius animi ducimus velit 
        consequuntur quae nobis esse deleniti autem laboriosam dolorum beatae 
        laborum? Incidunt reiciendis beatae earum aliquid libero tempore, 
        corrupti odit aspernatur alias hic, deserunt quia ea odio sequi expedita 
        esse. Saepe repellendus incidunt dolores laudantium consequuntur nihil 
        cumque sequi at accusantium reprehenderit dolorum corporis ab, magni quo 
        excepturi error laboriosam expedita quod impedit voluptate id quas. 
        Ratione, doloribus quae incidunt autem adipisci quos error cupiditate! 
        Quas, ipsum aliquam aut vel rerum vitae, aspernatur inventore, sequi 
        tempore recusandae laudantium sunt odio animi ipsa reprehenderit 
        distinctio voluptatem expedita cum nesciunt. Eos praesentium temporibus 
        excepturi ratione numquam officia rerum velit facilis nisi? Molestiae 
        eius repudiandae quibusdam quam doloremque sapiente cupiditate impedit 
        accusantium sint! Eius magnam consequuntur ipsum sint, reiciendis nemo 
        nobis assumenda et aut similique quam recusandae, esse obcaecati ullam 
        illum error! Ducimus, nesciunt eos ipsum assumenda inventore eum impedit? 
        Inventore quibusdam sed doloribus autem illum tempora atque illo, 
        odio quis quae odit voluptatum fugit rerum quia omnis delectus dolorum, 
        ad, rem eligendi non sit. Soluta illum eius ea, deserunt dignissimos 
        molestias? Deleniti esse nihil accusantium provident alias suscipit 
        sapiente officia debitis optio dolor minima aspernatur labore blanditiis 
        eos aliquid quos, animi ex quas vero! Natus sequi repellat, odio enim 
        quas distinctio consequatur corporis deserunt laudantium, est error 
        suscipit dignissimos hic minima cum modi earum velit molestias ipsum 
        quos ut officia qui commodi? Amet, enim saepe reprehenderit aspernatur 
        tempore assumenda. Tempora quasi sed libero perferendis, dolore earum. 
        Officia obcaecati quos laudantium sequi quasi. Dignissimos repellendus 
        porro delectus harum earum, sapiente minima laudantium, ea neque rerum 
        fugit. Voluptas placeat quia sapiente consequatur facilis, ipsa culpa 
        dolor neque quod corporis totam velit commodi repudiandae, nam corrupti? 
        Unde molestiae nisi id eligendi aut velit ad tempora optio, labore aliquam 
        et sint dolores excepturi saepe. Corrupti blanditiis deleniti unde quidem, 
        similique magni, mollitia tempora sed est voluptas aperiam provident fuga
         at doloribus perferendis explicabo quae. Eius cumque expedita ullam 
         dolores error ipsam odit porro sequi dignissimos? Ex a culpa amet 
         perspiciatis, hic nihil eum itaque repellat, molestias commodi deleniti 
         beatae ipsa excepturi aliquam officiis velit, labore laborum earum 
         ipsum eaque soluta ipsam. Modi ipsa dolor iusto officia sunt, quam esse, 
         voluptatem fuga, quasi temporibus ratione qui illo rerum. Mollitia, 
         libero nostrum?
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Iusto magnam est numquam minus qui inventore, 
        voluptatum modi nemo eos expedita, impedit officiis nulla atque 
        corrupti dolorem voluptatem quia vel facilis laudantium amet labore 
        molestias nihil. Debitis porro eveniet veritatis aspernatur fuga deleniti 
        ipsam quo nobis dolorem cumque a ab, inventore atque tempora quisquam 
        quidem laudantium numquam enim vel quam sit commodi. A nobis natus 
        aspernatur ipsa labore totam reprehenderit debitis! Sunt dignissimos 
        laborum eum pariatur ut at nisi! A, placeat quisquam iusto repudiandae 
        ab pariatur expedita quibusdam beatae ducimus incidunt sapiente fugiat 
        autem architecto eaque itaque quos, repellendus cupiditate officia 
        maiores! Aperiam, aspernatur vitae eligendi porro modi similique 
        expedita ut sit! Soluta ipsam minima eos quidem a officia harum possimus 
        hic consequuntur magni adipisci iste, repellendus placeat nam. Beatae 
        error cupiditate iste incidunt in voluptate totam! Libero placeat 
        provident ex et nobis doloremque vitae vero ratione consectetur pariatur 
        eligendi a ad distinctio architecto fugiat molestiae reiciendis 
        praesentium alias, unde atque consequatur veniam. Minima porro 
        minus magni, et ut odio eos perferendis commodi provident quia non 
        quos possimus maxime necessitatibus architecto harum amet beatae 
        incidunt delectus, iure cupiditate. Soluta velit sapiente, officia est 
        illum amet cum magnam rerum possimus voluptate at nam esse quaerat alias 
        tempore omnis illo vitae expedita beatae earum tempora dolore nostrum 
        laborum. Magni nobis dolorum doloremque natus in molestias optio, 
        corrupti officia esse accusamus laboriosam iusto voluptatum sint nisi 
        velit tenetur obcaecati quia omnis fuga, mollitia deleniti excepturi 
        neque itaque. Inventore architecto consectetur voluptatum cupiditate 
        tenetur, fugiat vitae tempora dolores excepturi eligendi officiis 
        reprehenderit non veniam necessitatibus nulla doloribus quam quis aperiam, 
        obcaecati in quod libero culpa. Voluptatibus alias eos doloribus 
        assumenda veritatis consequuntur ducimus explicabo illo, culpa, 
        dicta adipisci minima aliquam voluptate. Architecto molestias deleniti 
        doloremque necessitatibus eveniet explicabo reiciendis expedita illo 
        tempora aliquid iste dignissimos at veniam, cum nam. Aliquam voluptate 
        consequuntur quibusdam ducimus ex rem tempore dolor voluptas saepe 
        consequatur accusamus voluptatem architecto pariatur necessitatibus 
        minus expedita autem repellat possimus labore minima, soluta atque. 
        A at asperiores quod molestias beatae obcaecati quae sunt repellendus 
        excepturi, nisi pariatur numquam, voluptatem amet magnam fugit, 
        corrupti sequi! Eius facere alias aspernatur cupiditate, id totam. 
        Culpa magni iure velit nostrum! Dolores eaque assumenda illum! Aut, 
        illo nesciunt vero dolores sunt ducimus. Itaque est, doloremque 
        perspiciatis a nostrum nesciunt cum odio id eius animi ducimus velit 
        consequuntur quae nobis esse deleniti autem laboriosam dolorum beatae 
        laborum? Incidunt reiciendis beatae earum aliquid libero tempore, 
        corrupti odit aspernatur alias hic, deserunt quia ea odio sequi expedita 
        esse. Saepe repellendus incidunt dolores laudantium consequuntur nihil 
        cumque sequi at accusantium reprehenderit dolorum corporis ab, magni quo 
        excepturi error laboriosam expedita quod impedit voluptate id quas. 
        Ratione, doloribus quae incidunt autem adipisci quos error cupiditate! 
        Quas, ipsum aliquam aut vel rerum vitae, aspernatur inventore, sequi 
        tempore recusandae laudantium sunt odio animi ipsa reprehenderit 
        distinctio voluptatem expedita cum nesciunt. Eos praesentium temporibus 
        excepturi ratione numquam officia rerum velit facilis nisi? Molestiae 
        eius repudiandae quibusdam quam doloremque sapiente cupiditate impedit 
        accusantium sint! Eius magnam consequuntur ipsum sint, reiciendis nemo 
        nobis assumenda et aut similique quam recusandae, esse obcaecati ullam 
        illum error! Ducimus, nesciunt eos ipsum assumenda inventore eum impedit? 
        Inventore quibusdam sed doloribus autem illum tempora atque illo, 
        odio quis quae odit voluptatum fugit rerum quia omnis delectus dolorum, 
        ad, rem eligendi non sit. Soluta illum eius ea, deserunt dignissimos 
        molestias? Deleniti esse nihil accusantium provident alias suscipit 
        sapiente officia debitis optio dolor minima aspernatur labore blanditiis 
        eos aliquid quos, animi ex quas vero! Natus sequi repellat, odio enim 
        quas distinctio consequatur corporis deserunt laudantium, est error 
        suscipit dignissimos hic minima cum modi earum velit molestias ipsum 
        quos ut officia qui commodi? Amet, enim saepe reprehenderit aspernatur 
        tempore assumenda. Tempora quasi sed libero perferendis, dolore earum. 
        Officia obcaecati quos laudantium sequi quasi. Dignissimos repellendus 
        porro delectus harum earum, sapiente minima laudantium, ea neque rerum 
        fugit. Voluptas placeat quia sapiente consequatur facilis, ipsa culpa 
        dolor neque quod corporis totam velit commodi repudiandae, nam corrupti? 
        Unde molestiae nisi id eligendi aut velit ad tempora optio, labore aliquam 
        et sint dolores excepturi saepe. Corrupti blanditiis deleniti unde quidem, 
        similique magni, mollitia tempora sed est voluptas aperiam provident fuga
         at doloribus perferendis explicabo quae. Eius cumque expedita ullam 
         dolores error ipsam odit porro sequi dignissimos? Ex a culpa amet 
         perspiciatis, hic nihil eum itaque repellat, molestias commodi deleniti 
         beatae ipsa excepturi aliquam officiis velit, labore laborum earum 
         ipsum eaque soluta ipsam. Modi ipsa dolor iusto officia sunt, quam esse, 
         voluptatem fuga, quasi temporibus ratione qui illo rerum. Mollitia, 
         libero nostrum?
         </p>
         <div ref={newsletterRef} className="newsletter">
          <h2>Observed element !</h2>
         </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Iusto magnam est numquam minus qui inventore, 
          voluptatum modi nemo eos expedita, impedit officiis nulla atque 
          corrupti dolorem voluptatem quia vel facilis laudantium amet labore 
          molestias nihil. Debitis porro eveniet veritatis aspernatur fuga deleniti 
          ipsam quo nobis dolorem cumque a ab, inventore atque tempora quisquam 
          quidem laudantium numquam enim vel quam sit commodi. A nobis natus 
          aspernatur ipsa labore totam reprehenderit debitis! Sunt dignissimos 
          laborum eum pariatur ut at nisi! A, placeat quisquam iusto repudiandae 
          ab pariatur expedita quibusdam beatae ducimus incidunt sapiente fugiat 
          autem architecto eaque itaque quos, repellendus cupiditate officia 
          maiores! Aperiam, aspernatur vitae eligendi porro modi similique 
          expedita ut sit! Soluta ipsam minima eos quidem a officia harum possimus 
          hic consequuntur magni adipisci iste, repellendus placeat nam. Beatae 
          error cupiditate iste incidunt in voluptate totam! Libero placeat 
          provident ex et nobis doloremque vitae vero ratione consectetur pariatur 
          eligendi a ad distinctio architecto fugiat molestiae reiciendis 
          praesentium alias, unde atque consequatur veniam. Minima porro 
          minus magni, et ut odio eos perferendis commodi provident quia non 
          quos possimus maxime necessitatibus architecto harum amet beatae 
          incidunt delectus, iure cupiditate. Soluta velit sapiente, officia est 
          illum amet cum magnam rerum possimus voluptate at nam esse quaerat alias 
          tempore omnis illo vitae expedita beatae earum tempora dolore nostrum 
          laborum. Magni nobis dolorum doloremque natus in molestias optio, 
          corrupti officia esse accusamus laboriosam iusto voluptatum sint nisi 
          velit tenetur obcaecati quia omnis fuga, mollitia deleniti excepturi 
          neque itaque. Inventore architecto consectetur voluptatum cupiditate 
          tenetur, fugiat vitae tempora dolores excepturi eligendi officiis 
          reprehenderit non veniam necessitatibus nulla doloribus quam quis aperiam, 
          obcaecati in quod libero culpa. Voluptatibus alias eos doloribus 
          assumenda veritatis consequuntur ducimus explicabo illo, culpa, 
          dicta adipisci minima aliquam voluptate. Architecto molestias deleniti 
          doloremque necessitatibus eveniet explicabo reiciendis expedita illo 
          tempora aliquid iste dignissimos at veniam, cum nam. Aliquam voluptate 
          consequuntur quibusdam ducimus ex rem tempore dolor voluptas saepe 
          consequatur accusamus voluptatem architecto pariatur necessitatibus 
          minus expedita autem repellat possimus labore minima, soluta atque. 
          A at asperiores quod molestias beatae obcaecati quae sunt repellendus 
          excepturi, nisi pariatur numquam, voluptatem amet magnam fugit, 
          corrupti sequi! Eius facere alias aspernatur cupiditate, id totam. 
          Culpa magni iure velit nostrum! Dolores eaque assumenda illum! Aut, 
          illo nesciunt vero dolores sunt ducimus. Itaque est, doloremque 
          perspiciatis a nostrum nesciunt cum odio id eius animi ducimus velit 
          consequuntur quae nobis esse deleniti autem laboriosam dolorum beatae 
          laborum? Incidunt reiciendis beatae earum aliquid libero tempore, 
          corrupti odit aspernatur alias hic, deserunt quia ea odio sequi expedita 
          esse. Saepe repellendus incidunt dolores laudantium consequuntur nihil 
          cumque sequi at accusantium reprehenderit dolorum corporis ab, magni quo 
          excepturi error laboriosam expedita quod impedit voluptate id quas. 
          Ratione, doloribus quae incidunt autem adipisci quos error cupiditate! 
          Quas, ipsum aliquam aut vel rerum vitae, aspernatur inventore, sequi 
          tempore recusandae laudantium sunt odio animi ipsa reprehenderit 
          distinctio voluptatem expedita cum nesciunt. Eos praesentium temporibus 
          excepturi ratione numquam officia rerum velit facilis nisi? Molestiae 
          eius repudiandae quibusdam quam doloremque sapiente cupiditate impedit 
          accusantium sint! Eius magnam consequuntur ipsum sint, reiciendis nemo 
          nobis assumenda et aut similique quam recusandae, esse obcaecati ullam 
          illum error! Ducimus, nesciunt eos ipsum assumenda inventore eum impedit? 
          Inventore quibusdam sed doloribus autem illum tempora atque illo, 
          odio quis quae odit voluptatum fugit rerum quia omnis delectus dolorum, 
          ad, rem eligendi non sit. Soluta illum eius ea, deserunt dignissimos 
          molestias? Deleniti esse nihil accusantium provident alias suscipit 
          sapiente officia debitis optio dolor minima aspernatur labore blanditiis 
          eos aliquid quos, animi ex quas vero! Natus sequi repellat, odio enim 
          quas distinctio consequatur corporis deserunt laudantium, est error 
          suscipit dignissimos hic minima cum modi earum velit molestias ipsum 
          quos ut officia qui commodi? Amet, enim saepe reprehenderit aspernatur 
          tempore assumenda. Tempora quasi sed libero perferendis, dolore earum. 
          Officia obcaecati quos laudantium sequi quasi. Dignissimos repellendus 
          porro delectus harum earum, sapiente minima laudantium, ea neque rerum 
          fugit. Voluptas placeat quia sapiente consequatur facilis, ipsa culpa 
          dolor neque quod corporis totam velit commodi repudiandae, nam corrupti? 
          Unde molestiae nisi id eligendi aut velit ad tempora optio, labore aliquam 
          et sint dolores excepturi saepe. Corrupti blanditiis deleniti unde quidem, 
          similique magni, mollitia tempora sed est voluptas aperiam provident fuga
          at doloribus perferendis explicabo quae. Eius cumque expedita ullam 
          dolores error ipsam odit porro sequi dignissimos? Ex a culpa amet 
          perspiciatis, hic nihil eum itaque repellat, molestias commodi deleniti 
          beatae ipsa excepturi aliquam officiis velit, labore laborum earum 
          ipsum eaque soluta ipsam. Modi ipsa dolor iusto officia sunt, quam esse, 
          voluptatem fuga, quasi temporibus ratione qui illo rerum. Mollitia, 
          libero nostrum?
         </p>

         



    </div>
  );
}

