import { useEffect } from "react";

export const HugeContent = () => {

    useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);

    function handleGlobalScroll() {
        console.log("Scrolling !");
    }

    {/** Ici, même si on cache l'évènement, il ne se supprime pas
    il reste, donc il faut faire un nettoyage avec le return */}
    return() => {
        console.log("Nettoyage de l'écouteur");
        window.removeEventListener("scroll", handleGlobalScroll);     
    }
    }, []);

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatum nisi libero corporis suscipit. 
                Sunt reprehenderit quasi, culpa numquam at eius qui consequuntur dolorem magnam, deserunt laborum porro, 
                quibusdam minima ea facere aspernatur neque. Animi iure et accusantium autem veritatis reprehenderit omnis? 
                Officiis, laborum voluptatem laboriosam blanditiis molestiae porro. Mollitia atque vel nesciunt quisquam 
                quos neque illo dolores id odio modi totam ea nihil accusamus aperiam exercitationem, quia magni nobis? 
                Repellat, ipsum illo? Nisi rem cupiditate, veritatis dolores est dignissimos beatae mollitia dolorum soluta 
                voluptas dicta ducimus nihil! Omnis dolore perspiciatis sapiente, mollitia sit esse aut odit ipsum dignissimos 
                modi iusto quaerat sequi voluptas repellat iste natus vero numquam amet eligendi! Magni nemo odit vel quos, 
                iusto ratione tempora velit. Unde officia voluptate dolore libero ipsam reprehenderit necessitatibus! 
                Voluptates accusamus ipsa debitis cupiditate maiores eveniet quod error aut ut pariatur assumenda ipsam 
                cumque labore quidem eius molestiae tenetur consectetur nemo fuga, voluptatem neque. 
                Tenetur veritatis sint magni non voluptatibus, deserunt aspernatur assumenda unde, 
                quibusdam iusto explicabo reprehenderit commodi animi repudiandae quos velit ut dicta aliquam modi dolorum quam? 
                At sit tenetur, repellat saepe ut ex praesentium repudiandae sint provident commodi quod animi unde delectus 
                quis a velit enim labore, consequuntur fugit numquam dolor rerum. Quasi soluta atque quos molestiae, 
                possimus debitis, voluptatum sed assumenda error totam veniam laudantium et suscipit tenetur nostrum 
                ratione officiis, neque blanditiis adipisci ipsum optio quidem qui sequi autem. Excepturi hic mollitia distinctio.
                Molestiae est id totam sapiente. Reiciendis similique odio, ea ab laudantium facilis? Magni architecto 
                quod vitae voluptatum beatae harum inventore facilis autem accusamus illum, aliquid quo, 
                ab sit rem distinctio adipisci? Excepturi libero qui eaque corporis fugiat veritatis reiciendis nesciunt! 
                Obcaecati tempore a beatae optio amet veniam vel possimus consequatur accusantium delectus! Debitis exercitationem, 
                est iure ratione aliquid consectetur sapiente quibusdam dolore numquam harum, facilis tempore eius saepe 
                corrupti libero excepturi quasi dolor facere ipsum? Velit fugiat quis ea doloremque odit expedita optio dicta, 
                culpa saepe eaque quibusdam deleniti minima suscipit quisquam a similique consectetur officia.
                Nam veritatis ducimus ex nostrum at voluptas id sapiente reiciendis nulla porro suscipit aut assumenda sint pariatur, 
                explicabo inventore ratione corrupti recusandae voluptatem accusamus quia molestias nobis dolor fugiat? Nobis iure sequi 
                animi deleniti quidem, nihil quibusdam magnam praesentium vitae, quae tenetur necessitatibus minima! Necessitatibus
                cupiditate architecto quibusdam nemo ex officia beatae autem adipisci soluta velit sit molestiae eius rem incidunt 
                quis aliquam maiores nihil placeat, iure animi modi quae? Id autem doloribus, possimus reiciendis blanditiis, 
                quo earum assumenda tenetur vitae ducimus atque, error sapiente cupiditate odio officiis fuga ipsa unde quisquam 
                repellendus natus laborum culpa. Aliquid saepe rem animi tenetur. Nisi, eum ad adipisci soluta quia magnam alias, 
                excepturi in ex necessitatibus animi ullam quibusdam aut! Accusamus atque molestias itaque quas repellat harum, 
                excepturi at consequuntur laboriosam deleniti officia blanditiis tempora tenetur quisquam molestiae quam nobis modi, 
                veritatis cumque ipsa quod alias ducimus, aperiam neque! Pariatur labore eius quam aut, libero odio consectetur 
                totam praesentium omnis, officiis amet quos atque minus a hic velit quod ut. Omnis porro consectetur ullam doloremque. 
                Quasi voluptas dignissimos voluptatibus iusto, expedita dolor qui et numquam quae, velit tenetur doloremque ipsa suscipit 
                doloribus magnam corrupti quam deserunt. Pariatur quas, tempora harum itaque fuga similique voluptas temporibus. 
                Cum, magni? Corrupti quaerat eaque mollitia deserunt vel quod? Aut nam distinctio aperiam et ea, minima facere 
                voluptas error fugiat. Necessitatibus cupiditate dignissimos eius laudantium, explicabo corporis maxime libero 
                dolorem ducimus eveniet fugiat! Delectus odio ipsam, eum obcaecati placeat doloribus tenetur non velit voluptas! Nobis, 
                ut ducimus nihil qui quidem repudiandae odit quia earum vero inventore magni tenetur perspiciatis, consectetur a autem id 
                magnam ipsa soluta. Dolorem reiciendis suscipit, repudiandae sequi fuga totam officiis? Omnis accusamus veritatis, 
                quasi similique quas distinctio modi tempore totam blanditiis in vitae ex fugit cum dolor quos itaque deleniti, 
                nam sequi, aperiam voluptas ea. Adipisci dolorum minus dignissimos quisquam ratione aspernatur dicta officiis vitae, 
                voluptas sed, modi tempora ipsam aut beatae at deleniti eos culpa harum eaque quas veniam nulla magnam molestias minima? 
                Minima modi eligendi velit! Animi iure deleniti nisi sequi dolorum voluptatum facere ipsum consequuntur quia dolores sint, 
                minima assumenda, veritatis in asperiores, quas nulla eos ipsam perspiciatis nesciunt vero illo omnis? Quos nobis odio iste 
                aperiam eos numquam quae, cum earum odit ducimus? Ipsam eos rem fugiat nostrum explicabo accusantium inventore sapiente 
                ut molestias consequuntur quasi neque dignissimos tempore magnam saepe, commodi soluta provident? Rerum ut, neque aspernatur, 
                quos excepturi repudiandae reiciendis recusandae saepe quia vitae necessitatibus consequatur, fugit fugiat aperiam. 
                Fugiat facilis natus nesciunt sapiente, dolorem alias asperiores rem a eaque, quo voluptate porro. At assumenda, 
                suscipit animi expedita adipisci id doloremque quibusdam labore et! Unde repellendus sunt laborum praesentium ratione. 
                Quam nemo sed neque magni? Tempore enim sequi accusantium, inventore facilis sunt ratione distinctio commodi quos temporibus 
                perspiciatis placeat. Quam dolor soluta distinctio earum, modi vitae magnam, accusamus consectetur temporibus illum id voluptas 
                quisquam incidunt maxime atque quis officiis commodi minima aut molestiae non quibusdam. Ea adipisci natus voluptate quidem 
                reiciendis voluptatibus culpa maxime deserunt qui cupiditate, illo rem amet ipsam aut? Delectus, impedit ipsam numquam 
                architecto quisquam iste debitis nostrum consequatur magni! Nobis quae ea, commodi voluptate sunt perspiciatis mollitia, et, 
                eum quod voluptates iure assumenda eveniet facilis illo nulla! Impedit, possimus ipsum quasi eveniet odit officia laboriosam 
                quae cumque voluptatibus, quam sapiente est ea non assumenda nemo nam, voluptatum molestias quia earum corrupti necessitatibus 
                iusto. Esse molestiae ut inventore animi aliquid corrupti similique consequatur. Iusto quibusdam ex doloremque sunt assumenda 
                eaque dignissimos expedita, corporis iste voluptates, voluptas aliquid velit ea? Velit perspiciatis temporibus maxime doloremque 
                esse soluta unde sapiente, nam consectetur et dolorem optio deserunt labore! Ut, porro aliquam. Mollitia exercitationem 
                perferendis doloremque quae quo placeat beatae repudiandae quasi amet? Nam nostrum, eum consectetur nulla reiciendis expedita 
                perspiciatis quam! Fugit quas saepe autem voluptas fugiat dolores odit ut repudiandae eveniet, animi numquam quidem nesciunt, 
                explicabo molestias dolore amet maxime debitis libero laudantium facere vitae! Ipsa iusto quasi accusamus dolorem velit temporibus 
                placeat, animi maxime blanditiis id voluptatum voluptate, delectus sint. Repellendus voluptatum tempore, ea architecto reiciendis 
                eligendi. Nihil dolorum possimus nostrum quam cupiditate, facere explicabo dolorem temporibus, ullam cumque id corrupti impedit 
                quia aspernatur accusantium quidem deleniti, provident ipsum expedita error mollitia sapiente ratione optio culpa! Suscipit tempore 
                dolorem illum earum, nesciunt eum beatae sequi eius aut odit assumenda voluptatum doloribus culpa quo aliquid at magni sapiente 
                dignissimos voluptas temporibus! Consequatur deserunt sed voluptas sunt dolorum molestiae itaque repudiandae pariatur molestias. 
                Totam illo est maxime rem a quaerat deserunt, modi laborum ullam beatae excepturi sint omnis eligendi. Deserunt numquam error, 
                laudantium porro hic corporis vel veniam amet nam, id labore quibusdam doloribus eveniet rem obcaecati eius nisi dicta sequi fuga 
                cupiditate accusantium voluptates. Quo, aut. Temporibus commodi quidem numquam nam aliquam, tempore, quaerat adipisci fuga 
                animi recusandae dolorum quis alias aliquid, eligendi illum dolores aspernatur molestiae accusantium sequi aperiam blanditiis 
                ea accusamus! Ab enim laborum perspiciatis accusamus ipsa, vitae dolores sequi vero reiciendis magnam veritatis tenetur, esse est libero, 
                omnis repudiandae aut! Fuga dolorum a delectus facere, maxime obcaecati est illo inventore illum voluptates modi excepturi, 
                et tenetur vero sit id quaerat? Blanditiis repellendus vero at eius esse sapiente deleniti consequuntur sunt tempora fugit dolorem 
                provident quos amet quasi hic quisquam molestiae ducimus vitae natus laudantium sit, repellat voluptatum temporibus? Cumque fugiat 
                laudantium necessitatibus corrupti delectus soluta enim recusandae aliquid obcaecati a tempora distinctio, magnam ducimus ratione nisi, 
                ad nostrum non culpa aliquam consectetur perferendis quae? Quaerat error accusamus recusandae voluptatum consequuntur qui ea perspiciatis 
                ipsa voluptates corporis voluptate, numquam reiciendis possimus sint molestias itaque, repudiandae ducimus nisi dolores. Ullam, 
                quisquam repellendus a reiciendis, explicabo at ipsa aliquid tenetur beatae consequatur odio voluptatem incidunt porro dicta dolores, 
                natus perspiciatis recusandae eius! Nihil nulla, perferendis nisi dolore, nesciunt quia facere necessitatibus corrupti quisquam 
                exercitationem aperiam esse dignissimos distinctio? A officia sit natus perspiciatis similique, dolorem corporis distinctio doloribus 
                voluptatum repudiandae delectus autem, repellat quas sint eius alias sapiente in dolor voluptates, ex odit consequatur minus quis.
                Ducimus nihil exercitationem cupiditate dolor fuga repudiandae quidem. Ab cum, labore unde porro reiciendis voluptate error provident 
                ipsa facilis neque ut ipsam modi asperiores? Consectetur repudiandae quasi aperiam temporibus? Sapiente dolore fugiat ipsa accusantium 
                nihil perferendis officiis rem, porro nobis, aperiam excepturi! Consequuntur magni amet nesciunt possimus tenetur mollitia quas ad illum, 
                voluptates laborum esse corporis minima voluptate ab nihil commodi magnam voluptatum facere dicta debitis nemo? Quis autem ipsa aliquam 
                accusantium iure, temporibus labore aspernatur, ea dolorum recusandae tenetur aut alias pariatur maiores sunt necessitatibus dolor 
                adipisci neque. Vitae hic tempore eos explicabo corrupti quibusdam ratione quia necessitatibus autem. Unde eaque harum quae maxime 
                voluptate placeat deserunt, porro voluptatem animi soluta similique consequuntur id tempore quia non iste! Voluptatem sequi eveniet nam 
                ullam inventore tempore quibusdam exercitationem. Laudantium velit voluptate pariatur ex modi neque dolorum placeat explicabo tempora 
                ratione, a doloremque laboriosam quis consequatur. Labore esse et impedit rem? Ullam dolor, explicabo assumenda amet soluta recusandae 
                animi, dolore cumque porro dicta iure atque nihil quis. Cum aperiam eos nihil, error numquam fugit similique enim ut commodi! Eligendi 
                ex inventore sed harum adipisci, ad minima fuga commodi, debitis rem accusamus animi quas quidem assumenda excepturi officia vero vitae 
                ea numquam asperiores, recusandae repellendus rerum! Quos deserunt repudiandae labore magnam quam maiores natus pariatur, accusantium 
                fuga harum explicabo sit, nihil dolorem impedit consequuntur sunt in laborum soluta similique itaque sequi modi nisi ut! Quos commodi 
                obcaecati sint porro magnam veritatis officiis expedita cumque architecto aliquid, ut fugit velit eos eligendi soluta fugiat, 
                non eveniet impedit perferendis aliquam laudantium perspiciatis, at quibusdam! Unde ipsam tempora minus odit nulla molestiae accusantium 
                temporibus aut, alias deleniti non porro laboriosam necessitatibus? Aspernatur minus nesciunt quam laudantium. Magni pariatur id cupiditate 
                natus, nemo ducimus in doloremque consequuntur quasi expedita, est voluptates repellat suscipit atque porro mollitia necessitatibus 
                repellendus, libero sapiente esse! Dolorem, tempora explicabo excepturi odit sint tempore illum? Reiciendis quam eligendi nihil dolor, 
                laboriosam aliquid dignissimos obcaecati exercitationem blanditiis quidem mollitia consequuntur numquam at eius excepturi sint iste sunt 
                amet adipisci deleniti eaque. Facere ipsam tenetur sit eveniet blanditiis dignissimos modi amet consequuntur eum laboriosam provident 
                ea qui id reprehenderit, assumenda, cum optio laborum, pariatur dolore nesciunt quis? Repellat voluptate cumque dolores esse veniam maxime, 
                accusamus enim voluptatibus eum impedit nesciunt corporis rem, incidunt nisi cupiditate quas, alias nobis. Assumenda sed temporibus nulla. 
                Consectetur neque amet officia a dolorum fugiat modi tempore dolorem officiis autem quo similique, in porro omnis sunt qui natus repudiandae 
                consequatur quae? Aut repellendus facilis doloribus, nisi asperiores quidem consequuntur et nemo, sequi veritatis exercitationem nam fugiat 
                voluptas quaerat reprehenderit ullam totam obcaecati molestiae velit voluptatum rerum quisquam placeat. Voluptates a ipsum alias dolorem! 
                Aperiam, culpa accusamus? Molestiae ducimus nisi laudantium odio rerum expedita nesciunt nulla porro asperiores facere? Voluptatibus, 
                odit asperiores ullam voluptatum nesciunt voluptatem distinctio praesentium? Soluta ducimus totam dolores quisquam fugit similique, 
                aliquam quaerat quidem facilis, eius, praesentium optio voluptatem delectus recusandae odit sunt at. Ullam numquam corrupti eveniet sunt, 
                exercitationem, ipsum ab molestiae temporibus doloribus iure officiis in aspernatur consequuntur maxime. Aliquam, provident quos non 
                quisquam recusandae modi labore voluptatem adipisci dolore mollitia ratione ipsam laboriosam quam cumque amet ipsa voluptas deleniti 
                beatae odio. Inventore beatae tempora voluptate neque nam iste perferendis. Voluptate recusandae autem, officiis nam enim rem tempore. 
                Totam nihil, alias corrupti voluptas sit explicabo inventore illum perspiciatis aut atque, incidunt quia dolores, veritatis dolor. 
                Molestiae earum deleniti perferendis eos, aut sapiente nulla neque, explicabo similique, dicta assumenda. Accusamus, aliquid. 
                Distinctio recusandae veniam repellendus doloribus, rem, neque odio quidem eos facilis quod quos voluptate quaerat maiores voluptatem. 
                Accusamus accusantium nostrum enim laudantium dignissimos incidunt perferendis corporis magni cupiditate expedita, laborum, fugiat 
                laboriosam sapiente mollitia esse aspernatur ullam dicta ipsam natus. Nisi dignissimos modi ipsum! Quidem saepe vero aperiam incidunt sunt, 
                harum inventore maxime amet sed impedit nostrum nulla corporis, quas eos tenetur quos adipisci. Tempore placeat quisquam deleniti dolorem 
                accusantium sequi culpa minima harum magni, ipsa repudiandae nesciunt, obcaecati voluptates aspernatur commodi consequatur inventore 
                explicabo odio velit tenetur atque rem fuga enim sunt. Ipsum necessitatibus laudantium eligendi dolorum accusantium praesentium perferendis 
                neque ducimus assumenda?
            </p>
        </div>
    )
}
