import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducers/reducer";

// const initialState = {
//     user: {
//         isLoggedIn: false,
//         name: null
//     },
//     data: {
//         error: false,
//         loading: false,
//         lastPost: {},
//         previousPosts: [],
//         pagination: {
//             currentPage: 1,
//             postsPerPage: 10
//         }
//     },
//     search: {
//         minDate: "",
//         maxDate: "",
//         posts: []
//     },
//     timer: {
//         time: ""
//     }
// };
const initialState = {
    user: {
        isLoggedIn: true,
        name: "demo"
    },
    data: {
        error: false,
        loading: false,
        lastPost: {
            _id: "5d692713b4b49a0004939fda",
            title: "Post #185",
            text: "",
            date: "30.08.2019"
        },
        previousPosts: [
            {
                _id: "5d6926dde5a01f4c82f9543e",
                title: "Id vitae",
                text:
                    "Magnam fugit non sit eum omnis. Quis impedit sint. Aut voluptatibus quia asperiores rerum quidem. Praesentium et facilis voluptatem voluptatem. Rerum facilis corporis.",
                date: "28.08.2019"
            },
            {
                _id: "5d6926dde5a01f4c82f9543d",
                title: "Ut ab",
                text:
                    "Consequatur unde asperiores iusto officiis praesentium ad aut adipisci. Quis suscipit vel neque sed error ratione iure sit.",
                date: "26.08.2019"
            },
            {
                _id: "5d6926dde5a01f4c82f9543c",
                title: "Ea et",
                text:
                    "Repellendus magni error sint inventore. Earum blanditiis expedita consequuntur dolor aut eveniet ipsa modi ratione. Nisi voluptas quia aliquam nesciunt qui optio.",
                date: "24.08.2019"
            },
            {
                _id: "5d6926dde5a01f4c82f9543b",
                title: "Nulla necessitatibus",
                text:
                    "Nesciunt voluptatibus dignissimos molestiae fugiat officia architecto et repellendus. Voluptatem repudiandae aut iusto. Dicta voluptatem et consequuntur perferendis voluptatem excepturi error voluptas. Vitae atque sapiente quos et asperiores cupiditate perferendis enim.",
                date: "22.08.2019"
            },
            {
                _id: "5d6926dde5a01f4c82f9543a",
                title: "Id voluptatem et",
                text:
                    "Sunt nihil vitae sint temporibus. Nisi eius fuga sed. Beatae quae esse ut dolor quis.",
                date: "20.08.2019"
            },
            {
                _id: "5d6926dde5a01f4c82f95439",
                title: "Ea ex",
                text:
                    "Exercitationem molestias tenetur adipisci magnam. Aut qui quisquam et suscipit.",
                date: "18.08.2019"
            },
            {
                _id: "5d6926dde5a01f4c82f95438",
                title: "Similique consequuntur",
                text:
                    "Eos aut enim explicabo dolores quia eos. Vero blanditiis sint ipsa autem quam sed voluptatem. Autem laboriosam dolores expedita reprehenderit voluptatibus sit harum ea quia. Vel ut officia aut repudiandae dicta sed architecto odit a.",
                date: "16.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95437",
                title: "Et quasi",
                text:
                    "Dolorem aut libero hic ad vel adipisci minus quo vero. Possimus tempora possimus.",
                date: "14.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95436",
                title: "Voluptatum et",
                text:
                    "Quibusdam et pariatur sed assumenda minima qui esse. Rerum cupiditate excepturi delectus reprehenderit quo. Aliquid vitae officiis sed nulla dolor nam fugit. Consequatur sapiente amet dignissimos.",
                date: "12.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95435",
                title: "Nisi et",
                text:
                    "Dignissimos doloremque omnis aperiam ut laboriosam occaecati in consequatur. Omnis aliquid in laudantium cum quo.",
                date: "10.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95434",
                title: "Expedita quia harum",
                text:
                    "Aut est maxime consequuntur asperiores sed et molestiae non. Eum odio enim nemo cupiditate quis. Ducimus ipsum quia veritatis eos consequatur. Modi ea sed id voluptate ratione. Qui quia sed minima voluptatem veritatis est fuga sed.",
                date: "08.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95433",
                title: "Eos saepe",
                text:
                    "Occaecati at adipisci voluptatem minus est sint hic. Expedita deleniti explicabo perspiciatis tempore harum quia quod temporibus in. Eius aspernatur perferendis mollitia consequatur aperiam architecto.",
                date: "06.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95432",
                title: "Similique consequatur",
                text:
                    "Omnis tempore quae voluptatem qui iusto nihil vel molestiae. Corrupti voluptas dolorem est harum natus excepturi eos natus. Minima corporis voluptate praesentium accusantium numquam quaerat. Occaecati ab fugiat debitis hic. Cupiditate eius tempore occaecati porro neque expedita rerum id saepe.",
                date: "04.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95431",
                title: "Qui provident",
                text:
                    "Expedita qui ad nihil enim nihil amet. Laborum et deserunt veniam. Repellendus officiis illo consectetur neque dolorem eligendi. Dolorem quisquam voluptatem aut cum dolore in expedita rerum. Ipsa libero perspiciatis excepturi et quae voluptatum maxime numquam.",
                date: "02.08.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95430",
                title: "Id et",
                text:
                    "Error in sed voluptates saepe voluptatibus et. Dolores laborum consequatur ex voluptatem tenetur doloribus. Ut ducimus inventore deserunt.",
                date: "31.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f9542f",
                title: "At accusantium illum",
                text:
                    "Deserunt delectus ipsam nihil at placeat est a. Beatae blanditiis ut qui sint voluptatum dolor doloremque. Est iusto provident doloremque nostrum similique explicabo quo.",
                date: "29.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f9542e",
                title: "Dolor delectus",
                text:
                    "Aut tenetur ut eveniet. Et libero quisquam. Enim aut rerum at cumque sint est et doloremque. Commodi perspiciatis veritatis quibusdam id omnis similique et.",
                date: "27.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f9542d",
                title: "Aut consequuntur dicta",
                text:
                    "Ut et sint repudiandae ut. Accusantium vero asperiores corporis voluptas accusantium reiciendis. Dolor ut nesciunt quod quos.",
                date: "25.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f9542c",
                title: "Vel distinctio natus",
                text:
                    "Eveniet officiis magni porro fugiat debitis. Quam cum nisi omnis vel. Est unde sed et ipsa aut eligendi.",
                date: "23.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f9542b",
                title: "Rerum vel fuga",
                text:
                    "Aut ab qui qui et. Animi adipisci totam vitae dolores impedit aut temporibus et.",
                date: "21.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f9542a",
                title: "Et excepturi",
                text:
                    "Accusamus rerum aut ut modi perferendis quasi quaerat. Labore quibusdam autem esse voluptatem aut fuga est.",
                date: "19.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95429",
                title: "Quia placeat maiores",
                text:
                    "Repudiandae praesentium quibusdam et et dolores illo. Et voluptas illum et aliquid dolor repellendus vel illo. Odit dolorem adipisci illum dolor eligendi veniam vel.",
                date: "17.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95428",
                title: "Sit consequatur",
                text:
                    "Consequuntur adipisci laboriosam dignissimos placeat vel veritatis placeat aut. Distinctio dolores ullam vitae ducimus quam. Voluptatem quisquam ut vel est.",
                date: "15.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95427",
                title: "Repudiandae vel",
                text:
                    "Doloremque dignissimos atque itaque velit natus dolorem. Quia nobis eos sed quis. Laboriosam at deserunt excepturi placeat. Quia et id exercitationem voluptas cum. Tenetur eos fuga vel praesentium sed consectetur sint.",
                date: "13.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95426",
                title: "Soluta ut",
                text:
                    "Molestiae eius accusamus voluptatem qui. Praesentium corporis molestias nulla placeat. Ipsa ut est ea veniam provident vel.",
                date: "11.07.2019"
            },
            {
                _id: "5d6926dce5a01f4c82f95425",
                title: "Qui incidunt libero",
                text:
                    "Hic enim vel. Ex soluta sapiente suscipit iste facilis tempora tenetur. Rerum et impedit error ut magni fugit. Expedita ratione nostrum consequatur omnis facere.",
                date: "09.07.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95424",
                title: "Omnis eveniet",
                text:
                    "Vel porro sint tempora odio et iste mollitia ea. Qui similique eius vitae dolores soluta commodi enim voluptas. Blanditiis nihil in fugiat dolores aut officiis.",
                date: "07.07.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95423",
                title: "Aspernatur consequatur libero",
                text:
                    "Non eos non temporibus a nam sit nihil. Numquam aliquid recusandae voluptates ea. Magnam et consequatur impedit nisi reprehenderit omnis.",
                date: "05.07.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95422",
                title: "Numquam reiciendis sit",
                text:
                    "Natus blanditiis in libero neque ut ipsam aut. Omnis autem perferendis et velit voluptatum nulla natus.",
                date: "03.07.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95421",
                title: "Aut voluptatem",
                text:
                    "Voluptatem placeat assumenda consequatur. Tempore quia architecto maxime. Hic voluptatem fugiat dolores voluptatibus ut suscipit. Dolor tempore nobis repellat. Odio consequatur deserunt molestiae eum.",
                date: "01.07.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95420",
                title: "Aperiam sunt",
                text:
                    "Aut dolorum maiores dolor molestiae aut necessitatibus aut veritatis nam. Consequatur in dolore tempore dolorum nemo corporis architecto. Vel saepe dignissimos optio provident quisquam enim omnis velit vel. Sint voluptatem mollitia natus est aspernatur voluptatem.",
                date: "29.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f9541f",
                title: "Ipsam itaque quia",
                text:
                    "Sunt praesentium similique qui et. Ut facilis ut. Aut ullam deleniti ea pariatur asperiores quia.",
                date: "27.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f9541e",
                title: "Repudiandae molestiae aut",
                text:
                    "Error ut officiis et. Nihil quis dolorum aut asperiores quia libero. Reiciendis consequatur voluptatem qui blanditiis qui. Consectetur nam ea fuga consequatur quia totam. Inventore nisi soluta magnam nostrum laboriosam quia eius quia.",
                date: "25.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f9541d",
                title: "Est et",
                text:
                    "Velit velit provident cum ut deserunt. Fugit et expedita voluptate repellendus dolorem ducimus autem. Ducimus quis dolor architecto fuga nesciunt in ipsa. Enim inventore dolor consequuntur pariatur.",
                date: "23.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f9541c",
                title: "Perferendis voluptatem",
                text:
                    "Laborum aut earum similique nobis rerum. Qui impedit nostrum et velit sit est ut iste. Dolores rerum odio debitis totam dolorem doloribus sit autem corporis. Exercitationem veniam voluptatem aliquid pariatur culpa qui voluptatem non esse.",
                date: "21.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f9541b",
                title: "Provident quod",
                text:
                    "Consequuntur sit et veritatis dolorem. Nihil accusantium incidunt ratione qui. Dolorem dolores id odit et. Necessitatibus tenetur nesciunt quis sed in voluptatem blanditiis non. Laudantium vitae iste ullam magnam animi quam quam eius omnis.",
                date: "19.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f9541a",
                title: "Provident nihil",
                text:
                    "Repellendus consequatur est facere error nisi ut praesentium qui. Error pariatur ab ut dolores cumque. Tempore voluptatem beatae numquam.",
                date: "17.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95419",
                title: "Mollitia quidem nam",
                text:
                    "Vero voluptatem sapiente vero voluptatibus officia aut quis sunt. Veniam consequuntur sapiente a animi ab repellendus. Voluptatem eum quos molestiae id pariatur soluta quia ut. Culpa ut repudiandae itaque autem eum dicta.",
                date: "15.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95418",
                title: "Dolores est",
                text:
                    "Consequatur velit neque amet porro sapiente iure. Delectus beatae temporibus quaerat.",
                date: "13.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95417",
                title: "Molestiae non",
                text:
                    "Et ex vel aut nulla nostrum aspernatur tenetur perferendis quia. Quos ea nihil. Blanditiis iste rerum sunt. Hic recusandae et et aut vel assumenda aperiam blanditiis mollitia.",
                date: "11.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95416",
                title: "A totam praesentium",
                text:
                    "Voluptatem delectus qui similique impedit. Quis doloremque reiciendis totam ut sed. Ipsum vitae fuga.",
                date: "09.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95415",
                title: "Quis distinctio unde",
                text:
                    "Dolorem dolore facere asperiores animi. Beatae dolor non quam omnis rerum. Asperiores et non qui aperiam nulla vel autem blanditiis.",
                date: "07.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95414",
                title: "Praesentium quod illo",
                text:
                    "Exercitationem vero blanditiis maiores doloremque fuga labore eveniet eos adipisci. Qui autem est nulla eius doloribus possimus. Eos eius nulla numquam.",
                date: "05.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95413",
                title: "Minus aliquam",
                text:
                    "Eaque officiis in fugiat. Sed et expedita eligendi qui similique laudantium.",
                date: "03.06.2019"
            },
            {
                _id: "5d6926dbe5a01f4c82f95412",
                title: "Ea enim ipsam",
                text:
                    "Qui tenetur architecto vel corporis corporis. Deleniti nesciunt dignissimos deleniti. Quo doloremque quisquam.",
                date: "01.06.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95411",
                title: "Est beatae",
                text:
                    "Molestias atque quia id quis minus cumque. Impedit et doloribus laudantium magnam sit. Minima praesentium reprehenderit doloremque ut voluptas commodi ipsa et. Debitis eligendi sed accusantium exercitationem aut voluptas hic.",
                date: "30.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95410",
                title: "Quibusdam labore",
                text:
                    "Aliquid eaque maxime. Exercitationem perferendis repellendus rem reprehenderit. Amet ex possimus.",
                date: "28.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f9540f",
                title: "Quasi iste",
                text:
                    "Blanditiis eius est occaecati quisquam. Et commodi delectus aut corrupti quaerat illum eum. Explicabo ut optio.",
                date: "26.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f9540e",
                title: "Minus non",
                text:
                    "Totam neque culpa accusamus fugiat quasi omnis mollitia. Iure voluptate dolores totam sunt voluptatem. Similique cupiditate omnis laudantium sit quidem eaque dolor. Aperiam doloribus nostrum voluptates reprehenderit quisquam et aspernatur. Eos harum quod eos sed accusamus optio est praesentium.",
                date: "24.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f9540d",
                title: "Molestiae nesciunt",
                text:
                    "Et distinctio aut quia quam ut voluptatem. Non amet dolores nihil animi. Suscipit nisi rerum soluta omnis nihil harum soluta doloremque. Quam eligendi facilis aperiam harum optio. Qui beatae voluptate quo sunt.",
                date: "22.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f9540c",
                title: "Voluptatem dolores dolorem",
                text:
                    "Sunt iusto perferendis ratione architecto non dicta excepturi ipsum. Iure perferendis vitae quia quidem voluptatum. Nulla fugiat ex deleniti dignissimos rem necessitatibus corrupti id.",
                date: "20.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f9540b",
                title: "Consequatur esse sit",
                text:
                    "Facere corrupti optio autem quisquam ad quidem. Sed quam libero eum in. Quibusdam est recusandae sequi eveniet. Aliquam iusto dolor quia quia.",
                date: "18.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f9540a",
                title: "Aut aut",
                text:
                    "Reprehenderit fugiat quia neque asperiores repellendus. Eligendi accusamus non ut vel voluptate. Atque modi illum unde ut.",
                date: "16.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95409",
                title: "Non facere",
                text:
                    "Est nihil omnis hic et consequatur magnam. Iusto corporis fugit accusantium.",
                date: "14.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95408",
                title: "Aut quos",
                text:
                    "Illum soluta consequatur non et. Quidem et ab fuga possimus blanditiis ut facilis. Soluta et animi nulla sequi commodi atque autem et. Maxime fugiat velit ea soluta enim culpa magni.",
                date: "12.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95407",
                title: "Nam eum",
                text:
                    "Facilis natus at corporis aut maxime repellat. Sint rerum sit qui nemo totam. Quae ab eum necessitatibus.",
                date: "10.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95406",
                title: "Aperiam voluptates",
                text:
                    "Aspernatur vero quo repellat quos. Sit quod dolores dignissimos et exercitationem. Molestias enim ut quis est neque quisquam exercitationem. Numquam molestiae odio dolore excepturi odio distinctio commodi.",
                date: "08.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95405",
                title: "Perspiciatis cupiditate tempore",
                text:
                    "Delectus voluptate quae quisquam quasi quae omnis explicabo vel. Molestiae autem sequi voluptatem corporis. Architecto illum dolor. Eos sed quos voluptatem ratione. Ipsum dolorem sunt vel adipisci voluptas esse iure.",
                date: "06.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95404",
                title: "A ut",
                text:
                    "Odio molestiae et odio autem dolorem accusantium recusandae. Nulla ex itaque.",
                date: "04.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95403",
                title: "Quas eaque mollitia",
                text:
                    "Quia voluptas quis non molestiae corrupti esse voluptatem quae quidem. Ut nam aliquid est sit possimus delectus. Provident molestiae sed inventore.",
                date: "02.05.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95402",
                title: "Ea est",
                text:
                    "Atque qui consequatur id provident aut quo in aut aliquid. Ea voluptatem et et corporis.",
                date: "30.04.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95401",
                title: "Porro rerum",
                text:
                    "Placeat non quas nihil facilis. Aspernatur id beatae et libero rerum iure et. Saepe dolorum voluptas quas ratione. Iusto dignissimos culpa porro eos consequatur deleniti.",
                date: "28.04.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f95400",
                title: "Quia omnis",
                text:
                    "Beatae at necessitatibus deleniti corrupti nulla sed qui aut consequuntur. Voluptas ut est voluptas saepe qui.",
                date: "26.04.2019"
            },
            {
                _id: "5d6926dae5a01f4c82f953ff",
                title: "Soluta occaecati quo",
                text:
                    "Cum qui magni similique cumque placeat dolor quasi. Cupiditate officia temporibus vel non voluptate laborum ea. Sequi sapiente occaecati a vitae natus quod suscipit. Qui dolore delectus vero sint quia repellat fugiat blanditiis. Velit sed voluptas est sit quidem autem quibusdam iure.",
                date: "24.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953fe",
                title: "Autem id corrupti",
                text:
                    "Explicabo et autem autem dolores voluptate eos delectus. Facilis illo aspernatur quibusdam natus laudantium. Dolores fugit vitae exercitationem rerum placeat aut.",
                date: "22.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953fd",
                title: "Quidem asperiores",
                text:
                    "Inventore in a labore voluptas qui doloremque distinctio perspiciatis qui. Inventore consectetur ab enim similique.",
                date: "20.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953fc",
                title: "Quam quam id",
                text:
                    "Consequatur adipisci nihil reprehenderit possimus. Vel perferendis expedita aspernatur aperiam quas veritatis dolore. Molestiae vel recusandae.",
                date: "18.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953fb",
                title: "Ea in",
                text:
                    "Voluptatem quasi quidem praesentium maxime fugit quam modi quam. Error atque sed. Minus sit exercitationem nesciunt non odio.",
                date: "16.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953fa",
                title: "Non consequuntur provident",
                text:
                    "Autem ullam voluptas. Eveniet omnis sed et suscipit accusantium quis nisi. Quis aspernatur exercitationem placeat. Voluptatem rem dolor ut at doloremque facere aspernatur.",
                date: "14.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f9",
                title: "Et excepturi illo",
                text:
                    "Aspernatur sapiente sed sit. Molestiae fuga consequuntur sequi ducimus voluptas possimus.",
                date: "12.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f8",
                title: "Eligendi nobis",
                text:
                    "Occaecati velit dicta corrupti. Sed eius sed dolores suscipit id labore et. Assumenda quam veniam adipisci.",
                date: "10.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f7",
                title: "Quam voluptate",
                text:
                    "Voluptas dolorum est doloremque vero nam. Quis porro ullam quia eaque eius enim. Laborum voluptas quo quas. Ut totam et aliquam laudantium consequatur.",
                date: "08.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f6",
                title: "Eum quas",
                text:
                    "Dolorem rerum corrupti et id assumenda soluta. Atque voluptas quia itaque adipisci eum ullam consequatur vel voluptas. Velit repudiandae earum tempora. Nobis ut sunt odit odit necessitatibus veritatis quae cupiditate nihil.",
                date: "06.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f5",
                title: "Sequi id",
                text:
                    "Quas dolores assumenda quam vel nam. In aut et. Ab sit dolores ea est deleniti qui qui. Sequi et ex distinctio.",
                date: "04.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f4",
                title: "Numquam debitis",
                text:
                    "Voluptatem corrupti magnam omnis quis. Quos aut est autem consequatur molestiae non. Animi vitae voluptatem est odit culpa animi quibusdam. Quia aut qui quae et quis. Repellat consequatur vel cupiditate molestias repellendus corrupti pariatur velit.",
                date: "02.04.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f3",
                title: "Rerum quae sint",
                text:
                    "Consequatur minus magnam consequatur sint ipsa facere commodi. Quia earum eveniet omnis. Quis qui id cupiditate blanditiis labore. Commodi reiciendis molestias qui autem ut iure non.",
                date: "31.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f2",
                title: "Necessitatibus non sequi",
                text:
                    "Minima dolor blanditiis aperiam assumenda labore dolorem sed praesentium. Aperiam vel quo et tempora laudantium tenetur aut. Est repellendus nobis.",
                date: "29.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f1",
                title: "Deleniti necessitatibus consectetur",
                text:
                    "Autem facilis dolores neque suscipit exercitationem. Magnam et optio distinctio eum accusantium natus.",
                date: "27.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953f0",
                title: "Repellendus delectus in",
                text:
                    "Debitis debitis quisquam ratione repellendus accusantium magnam consequatur aut. Nostrum distinctio et aliquid ullam voluptatibus. In dignissimos delectus nihil nam. Occaecati sed hic expedita iure delectus nihil porro voluptate.",
                date: "25.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953ef",
                title: "Iusto aliquam enim",
                text:
                    "Omnis aliquid neque minus saepe. At quaerat qui deleniti quae.",
                date: "23.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953ee",
                title: "Non aperiam minima",
                text:
                    "Expedita et aut rerum error ut nobis. Deleniti qui est et sequi animi quas.",
                date: "21.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953ed",
                title: "Officiis facilis omnis",
                text:
                    "Placeat veniam eligendi eius reiciendis et dolorum. Corporis veniam accusantium a voluptas consequatur. Aliquid accusamus doloremque voluptates rem placeat voluptates.",
                date: "19.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953ec",
                title: "Et rerum at",
                text:
                    "Nam magni autem cum. Dolores vel nesciunt inventore porro rerum sit possimus. Quis corporis pariatur voluptatem repellendus quidem. Mollitia doloribus tenetur. Hic consequatur maiores id.",
                date: "17.03.2019"
            },
            {
                _id: "5d6926d9e5a01f4c82f953eb",
                title: "Quo delectus",
                text:
                    "At pariatur illum suscipit aut vel blanditiis dolorem qui eaque. Cupiditate temporibus accusamus itaque blanditiis suscipit ipsam fuga. Perferendis reprehenderit quia soluta vel iure. Recusandae temporibus voluptas repellendus natus velit et quia ad et.",
                date: "15.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953ea",
                title: "Nostrum ut repellat",
                text:
                    "Sit vero id eaque. Minima similique nihil veniam autem neque et. Corrupti fugiat possimus exercitationem accusamus aut distinctio praesentium. Odio quasi libero ut ut.",
                date: "13.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e9",
                title: "Consequatur vero rerum",
                text:
                    "Dolore consectetur repudiandae dolorem sint molestiae qui ipsam rem. Nam ipsa temporibus aliquid consequatur quo vero.",
                date: "11.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e8",
                title: "Quae tenetur veritatis",
                text:
                    "Vel ea odio soluta sint quibusdam. Molestiae quia sed perferendis nisi aliquid occaecati. Ullam est sit nostrum id cupiditate soluta et minima. Voluptatem harum harum.",
                date: "09.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e7",
                title: "Fuga laboriosam suscipit",
                text:
                    "Quidem culpa est cumque vel numquam in. Qui excepturi labore qui. Sed ducimus quia ut consequatur ea esse modi totam. Temporibus delectus iure quibusdam vel est asperiores. Provident aut corporis et quisquam voluptas.",
                date: "07.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e6",
                title: "Et at",
                text:
                    "Quia natus quisquam dolor. Optio maiores modi aut ut. Dolorum dolor autem accusamus magni. Ut explicabo id velit vel doloremque aliquam.",
                date: "05.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e5",
                title: "Velit eveniet dolores",
                text:
                    "Voluptas magni minus hic nostrum non tenetur iste. Placeat laborum modi a non perspiciatis voluptas debitis eveniet.",
                date: "03.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e4",
                title: "Error aut",
                text:
                    "Assumenda perspiciatis quos quia. Qui soluta et. Ipsum modi rem illo iste consectetur. Facere et sit explicabo. Et reprehenderit distinctio enim ducimus laboriosam at.",
                date: "01.03.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e3",
                title: "Nulla deserunt",
                text:
                    "Non voluptates doloremque aut atque eveniet accusantium qui itaque. Similique consectetur ad minima repellendus. Unde inventore impedit ut. Omnis corporis veritatis. Qui vel quia earum.",
                date: "27.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e2",
                title: "Et qui et",
                text:
                    "Est quod aut accusamus eum dicta et. Amet tempore ab voluptas sit molestiae et earum. Occaecati voluptas vitae voluptatem quo doloribus. Quia voluptas incidunt perferendis quo. Eum reprehenderit nisi.",
                date: "25.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e1",
                title: "Magni quis",
                text:
                    "Qui sit fugiat omnis similique repellat. Voluptate numquam molestiae iure perspiciatis corrupti est minus autem libero. Consequatur fuga aut ipsum ipsa ducimus. Veritatis et consequatur nisi voluptate neque enim ut expedita.",
                date: "23.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953e0",
                title: "Neque qui",
                text:
                    "Corrupti quo veritatis similique exercitationem et maxime. Et voluptatem error necessitatibus vero consequatur. Occaecati quia sit impedit qui asperiores iste.",
                date: "21.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953df",
                title: "Et voluptates suscipit",
                text:
                    "Praesentium occaecati soluta provident laudantium velit nam modi sed. Dolorem delectus rerum quam molestias provident.",
                date: "19.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953de",
                title: "Quisquam repellendus delectus",
                text:
                    "Odit tempore quae dolore. Harum asperiores quia optio. Reprehenderit consequatur at at.",
                date: "17.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953dd",
                title: "Aliquam similique debitis",
                text:
                    "Itaque adipisci aspernatur. Laboriosam dolorum iure ipsum iure asperiores dicta hic numquam. Dolorem ut facere voluptatibus. Autem temporibus et temporibus nobis numquam ab hic dolorem voluptatem.",
                date: "15.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953dc",
                title: "Voluptatibus inventore",
                text:
                    "Eius similique aut blanditiis. Et consequuntur repellendus aut tempora. Dolore sit maxime dolorum laudantium. Sit numquam et rerum dolor.",
                date: "13.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953db",
                title: "Sed totam aliquam",
                text:
                    "Fuga nihil ut sapiente delectus. Ullam quo quis nihil odio est et.",
                date: "11.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953da",
                title: "Aperiam repudiandae eos",
                text:
                    "Aut sunt assumenda at maiores. Corporis molestiae itaque facere consectetur debitis laboriosam qui suscipit. Occaecati esse dignissimos numquam. Numquam enim mollitia velit maiores facilis dignissimos eos.",
                date: "09.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953d9",
                title: "Ipsum quis",
                text:
                    "Vel molestiae placeat temporibus. Rerum fuga quas necessitatibus est ab iste sit. Cumque quia molestiae veniam sed perspiciatis cumque est. Quibusdam optio accusamus iusto iure qui. Eum aut tempore hic sint.",
                date: "07.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953d8",
                title: "Aliquid nesciunt",
                text:
                    "Voluptatum consectetur omnis et nulla nostrum. Rerum fuga consequuntur saepe dignissimos ut accusantium accusantium voluptatem. Nobis qui rerum.",
                date: "05.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953d7",
                title: "Explicabo voluptas",
                text:
                    "Quasi dolores provident. Et corporis optio facere excepturi ratione odio tenetur et. Fugit esse quisquam excepturi qui omnis nostrum. Doloribus minus sequi voluptatem amet minima. Est enim culpa ipsa.",
                date: "03.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953d6",
                title: "Et quasi cumque",
                text:
                    "Facilis minima qui. Voluptatem ab labore voluptatum est. Ad delectus nihil quia magni fugit porro maxime. Perferendis placeat aspernatur sapiente molestiae ipsum deleniti.",
                date: "01.02.2019"
            },
            {
                _id: "5d6926d8e5a01f4c82f953d5",
                title: "Odio maxime voluptatem",
                text:
                    "Explicabo eum fuga molestiae repellendus at inventore non rerum. Sapiente nostrum in ut harum. Reprehenderit quia tenetur facilis placeat non itaque vel rerum nam. Accusamus a porro maxime explicabo et quidem doloribus. Quas et unde dolorem.",
                date: "30.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953d4",
                title: "Nemo et",
                text:
                    "Impedit delectus omnis veniam earum. Ut ullam accusamus ratione quam. Nisi reiciendis sed minima nemo debitis omnis dolore numquam in.",
                date: "28.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953d3",
                title: "Maiores ad repellendus",
                text:
                    "Nostrum officiis totam velit nisi. Sit molestiae maiores est officia ut enim voluptatibus.",
                date: "26.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953d2",
                title: "Amet voluptatum harum",
                text:
                    "Architecto ipsam facere dolor. Ut qui itaque architecto aperiam quidem ad. Eum nam enim dolor corporis neque. Deleniti adipisci repudiandae autem soluta eveniet nemo magnam est tempora.",
                date: "24.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953d1",
                title: "Ut quod",
                text:
                    "Qui non neque animi ab et voluptatum animi libero voluptatem. Omnis suscipit natus similique ullam quisquam vel. Quo aut et alias exercitationem voluptatem culpa sapiente. Et qui facilis ut qui.",
                date: "22.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953d0",
                title: "Sed consequatur occaecati",
                text:
                    "Quasi minima eius numquam repudiandae facilis pariatur maiores. Qui laudantium vel quia. Iste magnam distinctio consequatur aut dolor. Eum nulla quia maiores aliquid alias aut voluptas vitae. Quo aut quis et ea labore dolor.",
                date: "20.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953cf",
                title: "Aut consectetur pariatur",
                text:
                    "Aut iusto minima est nam. Odit ut aut. Velit nobis odio rem soluta non eveniet iusto cum.",
                date: "18.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953ce",
                title: "Aut in expedita",
                text:
                    "Magnam aut sit maxime eius sed. Aut ut eligendi quasi sequi. Qui molestias perspiciatis eum corrupti dicta quia voluptatum. Mollitia ea ratione fugiat laboriosam maxime.",
                date: "16.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953cd",
                title: "Id itaque minima",
                text:
                    "Et placeat deleniti itaque. Cumque omnis in dolores itaque quos quas commodi.",
                date: "14.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953cc",
                title: "Et inventore et",
                text:
                    "Natus odio id quia quidem placeat quia. Voluptas vel velit aliquid corrupti. Sunt earum est provident. Aspernatur est quibusdam aut nobis consequatur deleniti nobis.",
                date: "12.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953cb",
                title: "Adipisci accusamus",
                text:
                    "Ratione dolor magni ut consequuntur architecto. Sit voluptatum est dolorem. Consectetur eius quis molestiae officiis dignissimos officia aut.",
                date: "10.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953ca",
                title: "Molestiae doloribus",
                text:
                    "Ullam id rerum exercitationem molestiae exercitationem autem. In mollitia explicabo delectus ut ipsum quis consequatur dolorem. Ipsa debitis quo est tempora dolor suscipit quod. Vitae in et libero rem qui. Provident quos facere rerum quis.",
                date: "08.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c9",
                title: "Velit molestiae quae",
                text:
                    "Dolore ut assumenda sed fugit sed quis unde. Praesentium minus nulla impedit quidem iusto. Nam alias autem ipsum quia et. Laborum occaecati occaecati delectus est voluptatem sunt autem eum est. Quisquam et vel inventore provident consequatur sed.",
                date: "06.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c8",
                title: "Voluptas pariatur",
                text:
                    "Iusto voluptatibus et ab. Ut et et fugiat et cupiditate. Veniam ab iusto voluptate sunt quo aut ut. Quod sit optio atque debitis minima.",
                date: "04.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c7",
                title: "Voluptatem voluptates officia",
                text:
                    "Illum sed ut nesciunt quo eum dolores. Magnam voluptatem iste in explicabo ut alias neque eius ex. Placeat nihil tenetur sunt dolorem rerum consequatur. Eligendi deserunt sequi autem autem itaque aut harum quia labore.",
                date: "02.01.2019"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c6",
                title: "Laudantium eum doloribus",
                text:
                    "Ut facere praesentium aut qui. Corrupti quis perspiciatis distinctio amet ut. Nihil maiores rerum excepturi eum vel voluptatem molestiae.",
                date: "31.12.2018"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c5",
                title: "Laboriosam enim ad",
                text:
                    "Et consequuntur sint praesentium aut corrupti. Asperiores et ex at. Ut quo earum ea sint atque ut aut consequatur perferendis.",
                date: "29.12.2018"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c4",
                title: "Nihil est",
                text:
                    "Quam asperiores magnam quia tempore corporis et. Aliquam voluptas blanditiis qui temporibus repudiandae nihil et dolorum. Consequatur placeat id eum voluptatem consectetur temporibus quibusdam est.",
                date: "27.12.2018"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c3",
                title: "Perspiciatis soluta explicabo",
                text:
                    "Earum aut cumque voluptatem harum nesciunt quasi ab. Odio dolores inventore iusto. Officia excepturi facere qui voluptatem sint facilis aliquam dolorem voluptatem.",
                date: "25.12.2018"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c2",
                title: "Quod nihil ut",
                text:
                    "Aut dolores autem non sit. Qui error praesentium ipsum sit omnis qui voluptatum. Veritatis dolor a est. Sunt consequatur quis distinctio iure sint. Sit est dicta quod dolorem consequatur inventore maiores laboriosam.",
                date: "23.12.2018"
            },
            {
                _id: "5d6926d7e5a01f4c82f953c1",
                title: "Qui provident",
                text:
                    "Nulla rerum aperiam saepe hic. Est eveniet recusandae quas alias.",
                date: "21.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953c0",
                title: "Inventore est cupiditate",
                text:
                    "Error non explicabo voluptatibus pariatur veniam accusantium quae accusantium. Et tenetur omnis blanditiis nemo recusandae temporibus veniam. Voluptates optio ipsa alias numquam ut iste quidem tenetur.",
                date: "19.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953bf",
                title: "Ipsam eos",
                text:
                    "Quisquam fugit voluptatem at consectetur corrupti eos quis omnis voluptatem. Officia earum architecto asperiores. Reprehenderit dignissimos ipsam itaque quidem. Optio natus quidem consectetur ea eaque harum. Consequatur aut ut dolorem.",
                date: "17.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953be",
                title: "Ea quia",
                text:
                    "Inventore et consequatur. Sed hic totam aliquid nesciunt autem consequatur.",
                date: "15.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953bd",
                title: "Et nihil alias",
                text:
                    "Sunt maiores sunt vel molestiae unde veniam repudiandae odio. Autem sit similique at iure similique velit quidem. Omnis temporibus reprehenderit sit perferendis odit. Tenetur laudantium hic provident at qui autem. Ut asperiores officiis ullam molestiae aut.",
                date: "13.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953bc",
                title: "Ut enim qui",
                text:
                    "Eveniet quia harum molestiae porro praesentium. Vitae eos dolore minima dolores illo deserunt numquam. Explicabo quis neque sunt optio temporibus. Voluptatem ut explicabo.",
                date: "11.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953bb",
                title: "Cum aliquam qui",
                text:
                    "Consequatur eum omnis repellendus nostrum odit id est. Sint occaecati necessitatibus ratione debitis quia omnis. Sit quos nihil rerum aut ipsam rerum et ipsa qui. Soluta eos molestiae praesentium nihil.",
                date: "09.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953ba",
                title: "Deleniti quo",
                text:
                    "Cupiditate quibusdam sit quia ad ea quod. Officia quod blanditiis perspiciatis. Dolorem animi rerum qui nulla. Est modi et molestiae enim debitis architecto ut expedita. Enim labore ut voluptas facilis assumenda natus.",
                date: "07.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b9",
                title: "Consequatur earum",
                text:
                    "Debitis unde cupiditate qui totam odio nesciunt tenetur autem. Quam totam aperiam. Non enim accusantium laboriosam odio ut omnis adipisci. Est in quaerat omnis enim atque. Optio quibusdam error sunt.",
                date: "05.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b8",
                title: "Repellendus nam",
                text:
                    "Eaque cumque dolor saepe omnis vel ducimus non ipsum. Qui earum a dignissimos cumque expedita qui libero id.",
                date: "03.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b7",
                title: "Eum asperiores",
                text:
                    "Maxime voluptatem occaecati optio quo corrupti. Est ut iure quod quia eum incidunt sit eos a. Amet et odit sed quos non numquam odit est esse. Tenetur pariatur odio deserunt inventore.",
                date: "01.12.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b6",
                title: "Ex voluptatem quidem",
                text:
                    "Animi nemo consequatur labore. Tempora pariatur aut sed magnam est qui tempora et. Expedita minus molestiae ipsum enim voluptatem hic ratione.",
                date: "29.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b5",
                title: "Molestiae eaque nam",
                text:
                    "Architecto qui voluptate provident nihil voluptatibus iure. Quia accusamus voluptas est repellat enim. Et perferendis eos quis rem vel molestiae tempore illo nostrum. Et sequi voluptatibus nam et excepturi ea.",
                date: "27.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b4",
                title: "Unde unde",
                text:
                    "Dolore omnis reprehenderit nesciunt nisi impedit ullam illum. Et consequatur est incidunt molestiae ducimus et sunt hic molestiae. Est molestiae incidunt vero eos id.",
                date: "25.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b3",
                title: "Quidem dolores",
                text:
                    "Voluptate culpa voluptates iure repellendus repudiandae incidunt doloribus. Sed corrupti quidem aut. Excepturi dolorem nam enim unde maxime incidunt modi quia.",
                date: "23.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b2",
                title: "Occaecati explicabo iste",
                text:
                    "Dicta autem est recusandae modi consequatur rerum debitis. Dolorum dolorem aut nostrum repellat rerum. Ut nihil aut occaecati reiciendis.",
                date: "21.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b1",
                title: "Ut sit",
                text:
                    "Doloremque vel earum. In ullam incidunt eligendi. Saepe eveniet natus quaerat molestias. Non repudiandae tempora sapiente. Consequatur expedita nemo ab facilis dolores nesciunt.",
                date: "19.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953b0",
                title: "Quasi totam",
                text:
                    "Occaecati velit consequuntur dolorem. Aspernatur quia consectetur reprehenderit fugiat dolor velit consectetur sunt optio. Exercitationem enim aliquam sit maxime dolores.",
                date: "17.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953af",
                title: "Voluptatibus rerum",
                text:
                    "Voluptatem nulla voluptatem qui labore perspiciatis sapiente quia necessitatibus et. Nam accusamus quae. Voluptatem et pariatur quo amet qui sed voluptatem qui.",
                date: "15.11.2018"
            },
            {
                _id: "5d6926d6e5a01f4c82f953ae",
                title: "Quos sint",
                text:
                    "Et vel possimus consectetur natus. Omnis ut dolores necessitatibus eveniet rerum sed velit sit. Vel molestias magni dolor atque error et facilis fugit expedita. Commodi consectetur et voluptatem.",
                date: "13.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953ad",
                title: "Sed dolor ad",
                text:
                    "Ea qui cumque culpa delectus et. Sint repudiandae molestiae esse. Modi quo at ipsam corporis aut non ipsam veritatis.",
                date: "11.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953ac",
                title: "Enim necessitatibus",
                text:
                    "Distinctio nihil debitis beatae nobis ex in officia quis. Mollitia earum facilis quidem repellat sed nihil id eum. Quo nobis magnam voluptates earum voluptas provident quas. Repellendus impedit est sed cumque.",
                date: "09.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953ab",
                title: "Voluptates velit consequatur",
                text:
                    "Libero velit mollitia libero id aut. Iusto suscipit accusantium accusantium distinctio. Sint cupiditate aut iste dolorem.",
                date: "07.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953aa",
                title: "Sequi omnis",
                text:
                    "Ut reiciendis quos nihil dolor harum quam consequatur. Qui ratione autem soluta deserunt. Perferendis in laborum corrupti amet. Fugit nulla non quod id ut iure aspernatur eos sed.",
                date: "05.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a9",
                title: "Quasi sapiente aperiam",
                text:
                    "Magni eius aut dicta at quia voluptatem laudantium ducimus dolores. Et doloremque est. Corrupti et recusandae assumenda occaecati.",
                date: "03.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a8",
                title: "Eligendi distinctio",
                text:
                    "Quas autem fugiat quis et sed enim quas ea esse. Iure et unde pariatur itaque animi. Saepe consectetur atque voluptate dolores. Excepturi eveniet est quia.",
                date: "01.11.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a7",
                title: "Dolorem nulla nisi",
                text:
                    "Sint quasi ut commodi et. Pariatur tempora unde minima. Quasi atque libero voluptatum. Enim ad provident.",
                date: "30.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a6",
                title: "Enim est",
                text:
                    "Et nostrum optio quod voluptas rem et asperiores voluptate sunt. Sint sed necessitatibus odit.",
                date: "28.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a5",
                title: "Quas sit",
                text:
                    "Aut aut rerum deserunt iste animi. Molestiae sed aliquid sit et corrupti voluptatibus fuga. Tenetur assumenda sint eligendi voluptatum accusamus nihil consectetur.",
                date: "26.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a4",
                title: "Ut esse expedita",
                text:
                    "Ut iure doloribus aut. Excepturi deleniti provident provident labore quidem qui sed soluta quo.",
                date: "24.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a3",
                title: "Enim quo eum",
                text: "Ut nulla cupiditate. Natus et et possimus nihil.",
                date: "22.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a2",
                title: "Animi aut possimus",
                text:
                    "A ad et qui. Hic omnis praesentium quod eveniet reprehenderit sunt qui. Temporibus odio aut ad et.",
                date: "20.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a1",
                title: "Nam error in",
                text:
                    "Reprehenderit est ut exercitationem sit nam. Maiores explicabo non quo consequatur illum vel rem illo quam. Dolor veniam mollitia possimus. Temporibus dolorum neque culpa qui libero laboriosam quaerat ut. Necessitatibus et provident inventore voluptatem consequatur.",
                date: "18.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f953a0",
                title: "Aliquam adipisci optio",
                text:
                    "Sapiente possimus ex dolor et repellendus hic. Officia est aut est dolores quidem ea tenetur aliquam. Voluptatem eius quaerat in incidunt nihil sint. Quod magnam laborum odio perspiciatis. Sit iure ea sit eveniet.",
                date: "16.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f9539f",
                title: "Non sed explicabo",
                text:
                    "Veritatis qui delectus saepe illo non dignissimos. Hic beatae provident autem aliquam mollitia vel.",
                date: "14.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f9539e",
                title: "Illo dicta dolorem",
                text:
                    "Eos illum quam qui. Quaerat quaerat sed architecto ratione dolorem. Nisi et laborum autem adipisci veniam rerum corrupti sequi.",
                date: "12.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f9539d",
                title: "Non et",
                text:
                    "Sit sit nemo unde ratione. Voluptas necessitatibus quaerat temporibus eius laboriosam reiciendis. Dolores consequatur cum deserunt aut accusamus.",
                date: "10.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f9539c",
                title: "Quia nostrum",
                text:
                    "Aut perspiciatis dolore optio eos nemo dolorum. Dolores nobis autem dolor. Non officiis nesciunt hic et aspernatur.",
                date: "08.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f9539b",
                title: "Sit ea omnis",
                text:
                    "Et explicabo eos voluptatum ex similique explicabo. Quae nostrum cupiditate asperiores placeat. Atque aut numquam quia.",
                date: "06.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f9539a",
                title: "Pariatur perspiciatis sapiente",
                text:
                    "Unde quia ab suscipit tenetur tempore eligendi odio beatae non. Quia sit aut impedit.",
                date: "04.10.2018"
            },
            {
                _id: "5d6926d5e5a01f4c82f95399",
                title: "Facere enim",
                text:
                    "Minus voluptas molestias distinctio architecto esse. Qui quia et numquam.",
                date: "02.10.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95398",
                title: "Assumenda nam quae",
                text:
                    "Qui facere laboriosam ipsam dolores sint officiis ut. Voluptas deserunt voluptatem autem cumque numquam deleniti corrupti.",
                date: "30.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95397",
                title: "Perferendis sed impedit",
                text:
                    "Et nihil reprehenderit et consequatur tenetur voluptatem qui. Impedit id dolor delectus occaecati aut sit officiis quia culpa.",
                date: "28.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95396",
                title: "Facere voluptates",
                text:
                    "Perferendis qui at. Quia eveniet quo ipsum recusandae quisquam quibusdam. Sunt dicta porro id omnis asperiores ex. Ut deserunt est et placeat sed nihil molestiae qui. Quis eos consequatur id et quos quia.",
                date: "26.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95395",
                title: "Saepe eligendi",
                text:
                    "Et sit ratione reiciendis sed eum quo. Non veniam dolores dolorem neque in qui a. Non culpa deleniti rerum eaque incidunt rerum nihil vitae.",
                date: "24.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95394",
                title: "Eos veniam",
                text:
                    "Doloremque ad eligendi enim. Nostrum ratione voluptas earum voluptatem. Deleniti cupiditate rem itaque perferendis est qui cupiditate sed. Dolor voluptatem nostrum unde molestias corporis maxime atque impedit.",
                date: "22.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95393",
                title: "Possimus sapiente",
                text:
                    "Corrupti doloribus provident laboriosam illum ex rerum. Nihil aut dolor voluptatem ut id quia. Voluptate totam architecto minima quas sunt iste.",
                date: "20.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95392",
                title: "Nostrum suscipit aut",
                text:
                    "Non labore neque laudantium et nihil aut enim facere. Voluptas earum qui quia et consequatur ducimus molestias eligendi.",
                date: "18.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95391",
                title: "Eius et",
                text:
                    "Exercitationem eum dolor qui aut. Dolor eaque culpa aut magnam libero libero dolorem sed. Veritatis qui omnis consectetur. Aperiam nesciunt sit accusamus in velit magni nihil veritatis vel.",
                date: "16.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95390",
                title: "Et provident aliquid",
                text:
                    "Quidem dolorem cum deleniti. Necessitatibus dicta tenetur voluptatem nihil nobis. Et consequuntur hic quisquam ipsum rerum in.",
                date: "14.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f9538f",
                title: "Velit asperiores sit",
                text:
                    "Aliquid minima et. Vel sapiente temporibus laboriosam aperiam pariatur. Sapiente provident nulla. Pariatur officia enim quisquam facere.",
                date: "12.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f9538e",
                title: "Pariatur enim",
                text:
                    "Maxime a esse pariatur expedita reiciendis earum facilis. Aut et minima dolore et. Error eveniet aut eveniet voluptate.",
                date: "10.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f9538d",
                title: "Veritatis consequuntur quia",
                text:
                    "Debitis ut sint culpa nemo architecto. Aspernatur similique perferendis culpa nobis et nesciunt. Expedita soluta nisi.",
                date: "08.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f9538c",
                title: "Dolore voluptates",
                text:
                    "Cumque nihil dolorem consectetur adipisci et. Libero possimus quia sed aliquam non occaecati vel. Aut animi et reprehenderit sed et. Quidem voluptate et beatae veritatis. Officia dolores veritatis ratione voluptatibus excepturi eos.",
                date: "06.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f9538b",
                title: "Ut perferendis distinctio",
                text:
                    "Et sint enim rerum et consequatur. Iste voluptatem fugit totam. Vel aspernatur sed quia aperiam dolore nesciunt ratione. Ratione dolor est dolorem ducimus. Sed tenetur cum ullam aut fugiat officiis omnis.",
                date: "04.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f9538a",
                title: "Officiis qui",
                text:
                    "Sapiente veniam ea voluptas sit doloremque maiores iste ut. Voluptatem quibusdam nam et dolor sint aut nemo et. Modi libero tenetur quam quas rerum explicabo.",
                date: "02.09.2018"
            },
            {
                _id: "5d6926d4e5a01f4c82f95389",
                title: "Atque numquam mollitia",
                text:
                    "Molestias possimus officiis maiores est reprehenderit ipsa quo repudiandae. Ut ex ipsa. Rem placeat est totam voluptas facere cum.",
                date: "31.08.2018"
            },
            {
                _id: "5d6926d3e5a01f4c82f95388",
                title: "Recusandae rem aut",
                text:
                    "Nihil explicabo quidem in sit autem soluta voluptatem porro. Velit dignissimos aut ut sit. Neque quia perferendis ab ea quasi ut eligendi laborum. Vero ut ipsa exercitationem quia rerum tempore.",
                date: "29.08.2018"
            },
            {
                _id: "5d6924f8b4b49a0004939fd9",
                title: "Post #1",
                text: "",
                date: "28.08.2018"
            }
        ],
        pagination: {
            currentPage: 1,
            postsPerPage: 10
        },
        total: 185
    },
    search: {
        minDate: "2018-08-28",
        maxDate: "2019-08-28",
        keywords: [],
        posts: []
    },
    timer: {
        time: "10:04:32",
        date: "2019-08-30"
    }
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
