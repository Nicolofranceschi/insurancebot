
import { BigQuery } from '@google-cloud/bigquery'

const bigquery = new BigQuery();

async function query() {
    // Queries the U.S. given names dataset for the state of Texas.

    const query = `SELECT t0.confidence, t0.magvar, t0.reliability, t0.reportRating FROM (SELECT 
    ts,
    date(ts) as date,
    EXTRACT(hour from ts) as hour,
    EXTRACT(DAYOFWEEK from ts) as day_of_week,
    EXTRACT(MONTH from ts) as MONTH,
    country,
    city,
    roadtype,
    street,
    type,
    subtype,
    geo,
    magvar,
    reportRating,
    reliability,
    confidence,
    nThumbsUp
    FROM \`waze-public-dataset.partner_ZINIELIO.view_alerts_clustered\`
    where ST_INTERSECTS(geo, ST_GEOGFROMTEXT('POLYGON((6.627385867882256 45.110680804669705,6.676824344444756 45.02144606802773,6.753728641319756 45.01173824665369,6.759221805382256 44.937905020042216,6.750982059288506 44.89900724499881,6.877324832726006 44.84450612160911,7.000921024132256 44.83671603368581,7.069585574913506 44.68459879654441,6.965215457726006 44.68459879654441,6.860845340538506 44.53208106691311,6.951482547569756 44.42233419076596,6.885564578819756 44.42037254926424,6.891057742882256 44.36149269933793,7.011907352257256 44.253392467427666,7.187688602257256 44.1825281557999,7.382762239516185 44.11086670627658,7.629954622328685 44.15127949981053,7.67801980787556 44.17984746135641,7.665660188734935 44.11678250089131,7.72471170240681 44.05858480152762,7.761790559828685 44.08621118775472,7.715098665297435 44.11678250089131,7.761790559828685 44.14241076763748,7.85380105787556 44.11382467760874,7.99936990553181 44.104950319465324,7.989756868422435 44.139454227470985,8.08176736646931 44.14438171216288,8.088633821547434 44.20544835402259,8.09275369459431 44.26645175634504,8.058421419203684 44.29299798674039,8.07078103834431 44.315601981903946,8.10923318678181 44.29496389704878,8.16416482740681 44.371583065133166,8.157298372328684 44.382380278397754,8.22733621412556 44.4275106897594,8.253428743422434 44.5274582710985,8.360545442641184 44.46574615647149,8.43058328443806 44.51179154030463,8.563792512953684 44.4951410230866,8.65580301100056 44.583236763442606,8.730647371352122 44.57541142847074,8.77939920240681 44.486324118112975,8.829524324477122 44.53871613181877,8.817164705336497 44.561225324448806,8.891322420180247 44.54899314749618,8.929774568617747 44.56856339642911,8.90848855787556 44.61452757139352,8.882396028578684 44.635541618549766,8.914668367445872 44.65068656155699,8.926341341078684 44.67315241662438,9.02659158521931 44.64775559082582,9.043992469219736 44.61273949865503,9.145616004375986 44.57557864443449,9.206040809063486 44.59709571948219,9.203294227032236 44.61273949865503,9.199174353985361 44.681619722843806,9.214967200665049 44.75139342851328,9.173768470196299 44.77040801939077,9.164842078594736 44.81840659722896,9.105790564922861 44.805741435993454,9.046739051250986 44.84664962658875,9.073518226055674 44.87147257850768,9.051545569805674 44.88801526779249,8.974641272930674 44.92886505020617,8.982881019024424 44.960940941325084,8.957698984749687 44.988311789360075,8.924053354866874 44.98539793090713,8.90070740760125 45.04655785312783,8.886287851937187 45.05722987137454,8.802576639367285 45.0385623643295,8.766871072961035 45.005558925136704,8.711939432336035 45.03904756707483,8.662500955773535 45.018908195459645,8.635721780968847 45.04098833691154,8.64739475460166 45.061604950834386,8.644304849816503 45.07688070458807,8.608306686185125 45.10548144931398,8.614486495755438 45.126559266461555,8.59423045327497 45.13188805589108,8.578453112344926 45.15455562911607,8.55339055130977 45.15818716494336,8.558712053995317 45.164965412604765,8.542919207315629 45.17295302635124,8.553905535440629 45.18989274136538,8.562488604288285 45.19146545916849,8.580169726114457 45.20186849765012,8.579800179913617 45.20827872532636,8.55027442307768 45.20174754301514,8.551647714093304 45.19654625044988,8.527958444073773 45.193159106663245,8.524181893780804 45.20150563297374,8.548729470685101 45.20440848558359,8.524868539288617 45.222910689076755,8.54375129075346 45.23379152629935,8.536198190167523 45.26376350031603,8.535412605538655 45.278604317727144,8.51429825617342 45.27908748070579,8.518933113351155 45.29044062631268,8.49915623388695 45.291648274047084,8.514090773681872 45.312898665311195,8.538466689209216 45.31676151705588,8.528338667968981 45.34307018758078,8.555289504150622 45.36104477137073,8.582583663086169 45.348499354849146,8.602324721435778 45.351756605275305,8.6215770432318 45.35682306668421,8.635580313427965 45.34753420761292,8.632833731396715 45.33713892462883,8.658411276562731 45.32108799431697,8.664762747509997 45.29175011139868,8.703558218701403 45.2957351593255,8.718664419873278 45.30334220050427,8.724672568066637 45.32048448717196,8.725702536328356 45.33653558847968,8.744756949170153 45.33134663223268,8.760630513984058 45.355801909986305,8.744494344550464 45.355560655851015,8.720461751777027 45.37184300156879,8.723208333808277 45.38004270468526,8.72664156134734 45.375460664214515,8.766638662177417 45.37678708253478,8.765608693915699 45.38896456005212,8.802185136178098 45.37931924929555,8.814029771187863 45.38402154386516,8.811454850533567 45.38836177634175,8.843793150197937 45.394296571074335,8.82250713945575 45.426352371591484,8.82576870561786 45.43502600091569,8.809632536184266 45.4328577185471,8.790406461965516 45.46693829433401,8.788003202688172 45.48619735205348,8.765515562307312 45.49016871391807,8.722085233938172 45.50773562183675,8.711613889944031 45.52349304551411,8.72036862016864 45.529626421784464,8.706979032766297 45.5495853294456,8.697192580578026 45.58383184764736,8.68528758101838 45.622344918123716,8.66709147506135 45.61994372006981,8.6588517289676 45.639870548477575,8.668464766076974 45.643471026681084,8.683914290002756 45.6305082222862,8.693870649866037 45.63795019882686,8.669155285608209 45.661871440525,8.682287380945123 45.67236806416032,8.67713753963653 45.678605125194814,8.645036862146295 45.67452712549326,8.654858052722293 45.71274748345579,8.640095174304324 45.72401352542526,8.588425099841434 45.734917848964706,8.553234517566043 45.779711067233265,8.559929311267215 45.80747916444853,8.597076211192242 45.833798200171415,8.573043618418804 45.89117836780252,8.735778603770367 46.02531190202528,8.711059365489117 46.0991612086777,8.636483411462 46.12545927361957,8.449715833337 46.25237839992163,8.420876722008876 46.307902304183536,8.482674817712 46.43392677797387,8.44147608724325 46.47082618970581,8.29316065755575 46.40741947461411,8.08442042318075 46.26044946958739,8.159740164330639 46.180359800524464,8.011424734643139 46.08900206765837,7.86860246901814 45.92302984982929,7.6681071691470715 45.989145336215635,7.1819621496158215 45.872615986166224,7.151324904767815 45.88243377992496,7.10051313718969 45.86235429751363,7.041172629838788 45.925537325188316,6.982121116166913 45.864845713437134,6.921979527412039 45.84484785794221,6.879407505927664 45.84389121006926,6.868421177802664 45.82284079481157,6.842328648505789 45.84389121006926,6.802503209052664 45.82284079481157,6.809369664130789 45.71746928072079,6.873150439206914 45.67862682279629,6.907482714597539 45.662313047188405,6.975460619870977 45.65655410874924,7.000866503660039 45.63447269079776,6.980267138425664 45.6061381306958,7.003613085691289 45.51383162740892,7.062664599363164 45.46954768586986,7.125835986081914 45.428120339673164,7.190380663816289 45.39630662425904,7.116222948972539 45.312348199486294,7.133351041917342 45.2482006498811,7.070179655198592 45.216285714006645,7.042713834886092 45.23466316893486,6.954823209886092 45.207578530152034,6.945210172776717 45.172736464214445,6.887531950120467 45.172736464214445,6.879292204026717 45.16402261508685,6.883412077073592 45.13787306932164,6.849079801682967 45.13109159899992,6.766682340745467 45.15724425525331,6.736469938401717 45.13302924423722,6.682911588792342 45.13981048415193,6.627385867882256 45.110680804669705))'))
    AND type = "ACCIDENT" 
    AND date(ts)> '2021-01-01') AS t0 LIMIT 100; `;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
        query: query,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
}

try {
    query()
} catch (error) {
    console.error(error);
}