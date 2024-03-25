import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Departments, ObjectInDepartment } from '../models/department.model';
import { ArtObject } from '../models/artObject.model';

@Injectable({
  providedIn: 'root',
})
export class FakeArtObjectService {
 
/**
 * Caption,Image URL
"ΟΜΠΡΕΛΕΣ, Διαστάσεις γλυπτού: 40×18,5×35 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. –
                            Κωδ.: SCL-17","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0001-1-300x283.jpg"
"ΠΟΣΕΙΔΩΝΑΣ, Διαστάσεις γλυπτού: 44x33x15 εκ. – Κωδ.:
                            SCL-16","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις γλυπτού: 39x17x36 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 40x18x40 εκ. – Κωδ.:
                            SCL-15","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ksylo-282x300.jpg"
"ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ, Διαστάσεις γλυπτού: 12x8x11,5
                            εκ., Διαστάσεις με θήκη πλεξιγκλάς: 16x10x15 εκ. –
                            Κωδ.: SCL-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-01-n-300x233.jpg"
"ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ, Διαστάσεις γλυπτού: 17x10x15,5
                            εκ., Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. –
                            Κωδ.: SCL-02","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-02-n-1-300x192.jpg"
"ΟΜΠΡΕΛΑ, Διαστάσεις γλυπτού: 34x9x32 εκ., Διαστάσεις
                            με θήκη πλεξιγκλάς: 40x15x40 εκ. – Κωδ.: SCL-03","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-4-300x208.jpg"
"ΠΟΣΕΙΔΩΝΑΣ, Διαστάσεις γλυπτού: 16x10x22 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 20x13x29 εκ. – Κωδ.:
                            SCL-05","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-05-n-600x825.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις γλυπτού: 20x9x23 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 26x11x26 εκ. – Κωδ.:
                            SCL-07","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-2-300x203.jpg"
"ΟΜΠΡΕΛΑ, Διαστάσεις γλυπτού: 25×10,5×38 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 33x15x40 εκ., Κωδ.:
                            SCL-08","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x225.jpg"
"ΚΕΝΟ & ΣΦΑΙΡΑ, Διαστάσεις γλυπτού: 19x7x13 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. – Κωδ.:
                            SCL-09","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-1-300x190.jpg"
"ΧΩΡΙΣ ΤΙΤΛΟ, Διαστάσεις γλυπτού: 19x7x13 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. – Κωδ.:
                            SCL-10","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg"
"4 ΕΠΟΧΕΣ, Διαστάσεις γλυπτού: 39x8x15 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 44x13x18 εκ. – Κωδ.:
                            SCL-11","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-11-n-300x195.jpg"
"4 ΕΠΟΧΕΣ, Διαστάσεις γλυπτού: 25x5x9 εκ., Διαστάσεις
                            με θήκη πλεξιγκλάς: 25x10x12 εκ. – Κωδ.: SCL-12","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x204.jpg"
"4 ΕΠΟΧΕΣ, Διαστάσεις γλυπτού: 39x8x15 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 44x13x18 εκ. – Κωδ.:
                            SCL-13","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x146.jpg"
"4 ΕΠΟΧΕΣ, Διαστάσεις γλυπτού: 25x5x9 εκ., Διαστάσεις
                            με θήκη πλεξιγκλάς: 25x10x12 εκ., Κωδ.: SCL-14","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x200.jpg"
"ΧΩΡΙΣ ΤΙΤΛΟ, μεταξοτυπία – Κωδ.: SLN-01, Διαστάσεις
                            με κορνίζα και τζάμι: 82×81 εκ. / Διαστάσεις χωρίς
                            κορνίζα: 77×76 εκ.","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf5763-275x300.jpg"
"ΧΩΡΙΣ ΤΙΤΛΟ, μεταξοτυπία – Κωδ.: SLN-02, Διαστάσεις
                            με κορνίζα και τζάμι: 125×81 εκ. / Διαστάσεις χωρίς
                            κορνίζα: 120×76 εκ.","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf5768-187x300.jpg"
"ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ, σκουλαρίκια σε μασίφ ασήμι 925
                            επιπλατινωμένο – Κωδ.: SP-E-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sp-e-01-n-600x450.jpg"
"ΣΥΝΘΕΣΗ, σκουλαρίκια σε μασίφ ασήμι 925 – Κωδ.:
                            SR-E-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-e-01-n-1-600x400.jpg"
"ΣΥΝΘΕΣΗ, σκουλαρίκια σε μασίφ ασήμι 925 επιχρυσωμένο
                            με 24Κ – Κωδ.: SG-E-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-e-01-n-2-600x400.jpg"
"ΣΥΝΘΕΣΗ, περιδέραιο σε μασίφ ασήμι 925 επιχρυσωμένο
                            με 24Κ – Κωδ.: SG-P-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-01-n-1-600x400.jpg"
"ΠΟΥΛΙ, περιδέραιο σε μασίφ ασήμι 925 επιχρυσωμένο με
                            24Κ – Κωδ.: SG-P-03-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-03-n-600x450.jpg"
"ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ, περιδέραιο σε μασίφ ασήμι 925
                            επιπλατινωμένο – Κωδ.: SP-P-03-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sp-p-03-n-1-600x450.jpg"
"ΔΙΑΦΡΑΓΜΑ, περιδέραιο σε μασιφ ασήμι 925 οξειδωμένο
                            – Κωδ.: SR-P-06-B-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr_p_06_b-267x300.jpg"
"ΔΙΑΦΡΑΓΜΑ, περιδέραιο σε μασιφ ασήμι 925 – Κωδ.:
                            SR-P-06-S-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr_p_06_s-232x300.jpg"
"ΣΥΝΘΕΣΗ, περιδέραιο σε μασίφ ασήμι 925 – Κωδ.:
                            SR-P-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-p-01-n-600x450.jpg"
"4 ΕΠΟΧΕΣ, περιδέραιο σε μασίφ ασήμι 925
                            επιχρωματισμένο με ψυχρό σμάλτο – Κωδ.:
                            SR-P-05-GRYG-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-p-05-gryg-n-2-600x450.jpg"
"4 ΕΠΟΧΕΣ, περιδέραιο σε μασίφ ασήμι 925
                            επιχρωματισμένο με ψυχρό σμάλτο – Κωδ.: SR-P-06-
                            GBYG-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-p-06-gbyg-n-600x450.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 οξειδωμένο,
                            Διαστάσεις: 77×53 χιλ., βάρος: 7 γρ. – Κωδ.:
                            SR-B-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-01-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 οξειδωμένο,
                            Διαστάσεις: 47×35 χιλ., βάρος: 3 γρ. – Κωδ.:
                            SR-B-02-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-02-n-200x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 77×53 χιλ., βάρος: 7
                            γρ. – Κωδ.: SR-B-03-B-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-03-b-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 77×53 χιλ., βάρος: 7
                            γρ. – Κωδ.: SR-B-03-G-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-03-g-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 77×53 χιλ., βάρος: 7
                            γρ. – Κωδ.: SR-B-03-R-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-03-r-n-200x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 77×53 χιλ., βάρος: 7
                            γρ. – Κωδ.: SR-B-03-V-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-03-v-n-200x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 77×53 χιλ., βάρος: 7
                            γρ. – Κωδ.: SR-B-03-Y-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-03-y-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 47×35 χιλ., βάρος: 3
                            γρ. – Κωδ.: SR-B-04-B-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-04-b-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 47×35 χιλ., βάρος: 3
                            γρ. – Κωδ.: SR-B-04-G-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-04-g-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 47×35 χιλ., βάρος: 3
                            γρ. – Κωδ.: SR-B-04-R-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-04-r-n-225x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 47×35 χιλ., βάρος: 3
                            γρ. – Κωδ.: SR-B-04-V-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-04-v-n-200x300.jpg"
"ΟΜΠΡΕΛΑ, καρφίτσα σε μασίφ ασήμι 925 επιχρωματισμένο
                            με ψυχρό σμάλτο, Διαστάσεις: 47×35 χιλ., βάρος: 3
                            γρ. – Κωδ.: SR-B-04-Y-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-04-y-n-225x300.jpg"
"ΤΕΣΣΕΡΙΣ ΕΠΟΧΕΣ, καρφίτσα σε μασίφ ασήμι 925
                            επιχρωματισμένο με ψυχρό σμάλτο – Κωδ.:
                            SR-B-06-GBYG-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-06-gbyg-n-600x400.jpg"
"ΤΕΣΣΕΡΙΣ ΕΠΟΧΕΣ, καρφίτσα σε μασίφ ασήμι 925
                            επιχρωματισμένο με ψυχρό σμάλτο – Κωδ.:
                            SR-B-06-GRYG-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-b-06-gryg-n-600x400.jpg"
"ΣΥΝΘΕΣΗ, δαχτυλίδι σε μασίφ ασήμι 925 επιχρυσωμένο
                            με 24Κ – Κωδ.: SG-R-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-r-01-n-2-600x450.jpg"
"ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ, δαχτυλίδι σε μασίφ ασήμι 925
                            επιπλατινωμένο – Κωδ.: SP-R-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sp-r-01-n-600x450.jpg"
"ΣΥΝΘΕΣΗ, δαχτυλίδι σε μασίφ ασήμι 925 – Κωδ.:
                            SR-R-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-r-01-n-1-600x400.jpg"
"ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ, μπρελόκ σε μασίφ ασήμι 925
                            επιπλατινωμένο – Κωδ.: SP-K-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sp-k-01-n-600x400.jpg"
"ΣΥΝΘΕΣΗ, μανικετόκουμπα σε μασίφ ασήμι 925 – Κωδ.:
                            SR-C-01-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-c-01-n-1-600x399.jpg"
"TEL-NÉANT, Διαστάσεις: 110x80x25 χιλ., Κωδ.: OC-08","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/oc-08-238x300.jpg"
"ΜΝΗΜΕΙΟ ΖΑΛΟΓΓΟΥ, Διαστάσεις: 80x50x50 χιλ., Κωδ.:
                            OC-02","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/zaloggo-krystallos-600x407.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-05-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-06-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx_0506-600x400.jpg"
"ΝΕΦΕΛΗ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-11-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-12-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx_1112-204x300.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-15-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-16-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx_1516-200x300.jpg"
"ΑΙΘΡΙΟ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-17-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-18-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx_1718-600x400.jpg"
"ΓΟΡΓΟΠΟΤΑΜΟΣ, Διαστάσεις: 19×13,6 εκ., Κωδ.:
                            PLX-19-N / Διαστάσεις: 25×20 εκ., Κωδ.: PLX-20-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx_1920-192x300.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-01-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-02-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx-01plus02-n-600x400.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-07-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-08-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx-07plus08-n-600x400.jpg"
"ΔΙΑΦΡΑΓΜΑ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-09-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-10 -N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx-09plus10-n-200x300.jpg"
"ΔΙΑΦΡΑΓΜΑ, Διαστάσεις: 19×13,6 εκ., Κωδ.: PLX-21-N /
                            Διαστάσεις: 25×20 εκ., Κωδ.: PLX-22-N","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/plx-21plus22-n-200x300.jpg"
"ΤΣΕΡΚΙΑ ΜΕ ΦΑΚΟ, Πρωτότυπη αφίσα της έκθεσης
                            «ΥΓΡΟΗΧΟΣ» που πραγματοποιήθηκε στο Ινστιτούτο
                            Goethe το 1984, 60 μοναδικά τεμάχια χωρίς
                            επανέκδοση, Διαστάσεις αφίσας: 61×46 εκ. –
                            Διαστάσεις αφίσας με κορνίζα: 64×49 εκ.","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/p-01-232x300.jpg"
"Καρτ ποστάλ με 8 επιλεγμένα γλυπτά του Γιώργου
                            Ζογγολόπουλου. Πακέτο που περιλαμβάνει 8 κάρτες σε
                            χάρτινη θήκη. Διαστάσεις: 11×16 εκ.","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0004-232x300.jpg"
"ΟΜΠΡΕΛΕΣ, Διαστάσεις γλυπτού: 40×18,5×35 εκ.,
                            Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. –
                            Κωδ.: SCL-19","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ompreles-300x295.jpg"
"ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ, Διαστάσεις γλυπτού: 38x9x10,5 εκ.,
                            Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. – Κωδ.:
                            SCL-20","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_1-113x300.jpg"
"ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ, Διαστάσεις γλυπτού: 38x9x10,5 εκ.,
                            Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. – Κωδ.:
                            SCL-20","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_2-142x300.jpg"
"ΦΑΚΟΣ ΜΕ ΟΜΠΡΕΛΑ, Διαστάσεις γλυπτού: 38x9x10,5 εκ.,
                            Διαστάσεις χάρτινης θήκης: 40x12x42 εκ. – Κωδ.:
                            SCL-20","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_omprela_3-123x300.jpg"
"ΦΑΚΟΣ ΜΕ ΦΑΚΟΥΣ, Διαστάσεις γλυπτού: 31,5x9x9 εκ.,
                            Διαστάσεις χάρτινης θήκης: 33x10x10 εκ. – Κωδ.:
                            SCL-21","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/fakos_me_fakous_1-137x300.jpg"
"ΚΕΝΟ ΜΕ ΟΜΠΡΕΛΑ, Διαστάσεις γλυπτού: 27,5x20x7,5
                            εκ., – Κωδ.: SCL-22","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/keno_me_omprela_1-211x300.jpg"
"ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ, Διαστάσεις γλυπτού: 22x20x5 εκ.
                            – Κωδ.: SCL-23","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg"
"Έξι σχέδια του γλυπτού Διάφραγμα σε χαρτί Fine Art
                            Photo Rag 320 gr. σε πολυτελή κασετίνα (όψη 2),
                            Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις
                            κασετίνας: 31,5×24,5×2,5 εκ. – Κωδικός: DWG-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/1-600x398.jpg"
"Έξι σχέδια του γλυπτού Διάφραγμα σε χαρτί Fine Art
                            Photo Rag 320 gr. σε πολυτελή κασετίνα (όψη 2),
                            Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις
                            κασετίνας: 31,5×24,5×2,5 εκ. – Κωδικός: DWG-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/2-300x279.jpg"
"Έξι σχέδια του γλυπτού Διάφραγμα σε χαρτί Fine Art
                            Photo Rag 320 gr. σε πολυτελή κασετίνα (όψη 2),
                            Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις
                            κασετίνας: 31,5×24,5×2,5 εκ. – Κωδικός: DWG-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/3-600x403.jpg"
"Έξι σχέδια του γλυπτού Διάφραγμα σε χαρτί Fine Art
                            Photo Rag 320 gr. σε πολυτελή κασετίνα (όψη 2),
                            Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις
                            κασετίνας: 31,5×24,5×2,5 εκ. – Κωδικός: DWG-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/4-300x269.jpg"
"Έξι σχέδια του γλυπτού Διάφραγμα σε χαρτί Fine Art
                            Photo Rag 320 gr. σε πολυτελή κασετίνα (όψη 2),
                            Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις
                            κασετίνας: 31,5×24,5×2,5 εκ. – Κωδικός: DWG-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0028-300x75.jpg"
"Σουβέρ με γλυπτά σε πλεξιγκλάς, Διαστάσεις κάθε
                            σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ.
                            – Κωδικός: SVR-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/glypta-600x391.jpg"
"Σουβέρ με 6 ζωγραφικά έργα σε πλεξιγκλάς, Διαστάσεις
                            κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης:
                            10x10x3,5 εκ. – Κωδικός: SVR-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/zografika-600x402.jpg"
"Σουβέρ με ζωγραφικά έργα σε πλεξιγκλάς – κόκκινα
                            παστέλ, Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ.,
                            Διαστάσεις θήκης: 10x10x3,5 εκ. – Κωδικός: SVR-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/kokkini_seira-600x398.jpg"
"Σουβέρ με ζωγραφικά έργα σε πλεξιγκλάς – μπλε
                            παστέλ, Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ.,
                            Διαστάσεις θήκης: 10x10x3,5 εκ. – Κωδικός: SVR-01","https://www.zongolopoulos.gr/wp-content/uploads/2022/11/mple_seira-600x408.jpg"

 */
  private objectData: ArtObject[] = [
    {
      objectID: 1,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40,5×18,7×40,5 εκ. - Κωδ.: SCL-17',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0001-1-300x283.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0001-1-300x283.jpg',
    },
    {
      objectID: 2,
      objectName: 'ΠΟΣΕΙΔΩΝΑΣ',
      objectDescription: 'Κωδ.: SCL-16',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0145-600x816.jpg',
    },
    {
      objectID: 3,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 40x18x40 εκ. - Κωδ.: SCL-15',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ksylo-282x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/ksylo-282x300.jpg',
    },
    {
      objectID: 4,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 16x10x15 εκ. - Κωδ.: SCL-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-01-n-300x233.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-01-n-300x233.jpg',
    },
    {
      objectID: 5,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-02',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-4-300x208.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-4-300x208.jpg',
    },
    {
      objectID: 6,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 20x14x20 εκ. - Κωδ.: SCL-03',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-300x192.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-03-n-300x192.jpg',
    },
  {
      objectID: 7,
      objectName: 'ΟΜΠΡΕΛΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 26x11x26 εκ. - Κωδ.: SCL-07',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-2-300x203.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-07-n-2-300x203.jpg',
    },
    {
      objectID: 8,
      objectName: 'ΟΜΠΡΕΛΑ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 33x15x40 εκ. - Κωδ.: SCL-08',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x225.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-08-n-300x225.jpg',
    },
    {
      objectID: 9,
      objectName: 'ΚΕΝΟ & ΣΦΑΙΡΑ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. - Κωδ.: SCL-09',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-1-300x190.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-09-n-1-300x190.jpg',
    },
    {
      objectID: 10, 
      objectName: 'ΧΩΡΙΣ ΤΙΤΛΟ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. - Κωδ.: SCL-10',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
    },
    


    {
      objectID: 11,
      objectName: '4 ΕΠΟΧΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 25x10x12 εκ. - Κωδ.: SCL-12',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x204.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-12-n-300x204.jpg',
    },
    {
      objectID: 12,
      objectName: '4 ΕΠΟΧΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 44x13x18 εκ. - Κωδ.: SCL-13',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x146.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-13-n-300x146.jpg',
    },
    {
      objectID: 13,
      objectName: '4 ΕΠΟΧΕΣ',
      objectDescription:
        'Διαστάσεις με θήκη πλεξιγκλάς: 25x10x12 εκ. - Κωδ.: SCL-14',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x200.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-14-n-300x200.jpg',
    },
    {
      objectID: 14,
      objectName: 'ΧΩΡΙΣ ΤΙΤΛΟ',
      objectDescription:       'Διαστάσεις με κορνίζα και τζάμι: 82×81 εκ. / Διαστάσεις χωρίς κορνίζα: 77×76 εκ. - Κωδ.: SLN-01',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf5763-275x300.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf5763-275x300.jpg',
    },

    {
      objectID: 15,
      objectName: 'ΣΥΝΘΕΣΗ',
      objectDescription: 'σκουλαρίκια σε μασίφ ασήμι 925 – Κωδ.: SR-E-01-N',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-e-01-n-1-600x400.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sr-e-01-n-1-600x400.jpg',
    },
    {
      objectID: 16,
      objectName: 'ΣΥΝΘΕΣΗ',
      objectDescription: 'σκουλαρίκια σε μασίφ ασήμι 925 επιχρυσωμένο με 24Κ – Κωδ.: SG-E-01-N',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-e-01-n-2-600x400.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-e-01-n-2-600x400.jpg',
    },
    {
      objectID: 17,
      objectName: 'ΣΥΝΘΕΣΗ',
      objectDescription: 'περιδέραιο σε μασίφ ασήμι 925 επιχρυσωμένο με 24Κ – Κωδ.: SG-P-01-N',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-01-n-1-600x400.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-01-n-1-600x400.jpg',
    },
    {
      objectID: 18,
      objectName: 'ΠΟΥΛΙ',
      objectDescription: 'περιδέραιο σε μασίφ ασήμι 925 επιχρυσωμένο με 24Κ – Κωδ.: SG-P-03-N',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-03-n-600x450.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/sg-p-03-n-600x450.jpg',
    },
    {
      objectID: 19,
      objectName: 'ΟΛΥΜΠΙΑΚΟΙ ΚΥΚΛΟΙ',
      objectDescription:
        'Διαστάσεις γλυπτού: 19x7x13 εκ., Διαστάσεις με θήκη πλεξιγκλάς: 24x12x21 εκ. - Κωδ.: SCL-10',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/scl-10-300x200.jpg',
    },

    {
      objectID: 21,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      objectDescription: 'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/1-600x398.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/1-600x398.jpg',
    },
    {
      objectID: 22,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      objectDescription: 'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/2-300x279.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/2-300x279.jpg',
    },
    {
      objectID: 23,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      objectDescription: 'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/3-600x403.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/3-600x403.jpg',
    },
    {
      objectID: 24,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      objectDescription: 'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/4-300x269.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/4-300x269.jpg',
    },
    {
      objectID: 25,
      objectName: 'Έξι σχέδια του γλυπτού Διάφραγμα',
      objectDescription: 'Διαστάσεις κάθε σχεδίου: 30×21,5 εκ., Διαστάσεις κασετίνας: 31,5×24,5×2,5 εκ. - Κωδικός: DWG-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0028-300x75.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/dscf0028-300x75.jpg',
    },
    {
      objectID: 26,
      objectName: 'Σουβέρ με γλυπτά σε πλεξιγκλάς',
      objectDescription: 'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/glypta-600x391.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/glypta-600x391.jpg',
    },
    {
      objectID: 27,
      objectName: 'Σουβέρ με 6 ζωγραφικά έργα σε πλεξιγκλάς',
      objectDescription: 'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/zografika-600x402.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/zografika-600x402.jpg',
    },
    {
      objectID: 28,
      objectName: 'Σουβέρ με ζωγραφικά έργα σε πλεξιγκλάς – κόκκινα παστέλ',
      objectDescription: 'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/kokkini_seira-600x398.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/kokkini_seira-600x398.jpg',
    },
    {
      objectID: 29,
      objectName: 'Σουβέρ με ζωγραφικά έργα σε πλεξιγκλάς – μπλε παστέλ',
      objectDescription: 'Διαστάσεις κάθε σουβέρ: 9x9x0,3 εκ., Διαστάσεις θήκης: 10x10x3,5 εκ. - Κωδικός: SVR-01',
      primaryImage: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/mple_seira-600x408.jpg',
      primaryImageSmall: 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/mple_seira-600x408.jpg',
    },


    {
      objectID: 30,
      objectName: 'ΡΟΜΒΟΣ ΜΕ ΕΛΑΣΜΑΤΑ',
      objectDescription: 'Διαστάσεις γλυπτού: 22x20x5 εκ. - Κωδ.: SCL-23',
      primaryImage:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
      primaryImageSmall:
        'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/rombos_me_elasmata-300x285.jpg',
    },
    
  ];

  BASE_URL = 'https://www.zongolopoulos.gr/wp-content/uploads/2022/11/';

  constructor(private _httpClient: HttpClient) {}

  

  getObjectDetails(objectId: any): Observable<ArtObject> {
    const object = this.objectData.find((obj) => obj.objectID === objectId);
    return new Observable((observer) => {
      observer.next(object);
      observer.complete();
    });
  }

  searchObject(
    queryString: any,
    departmentId: any
  ): Observable<ObjectInDepartment> {
    return this._httpClient.get<ObjectInDepartment>(
      this.BASE_URL + `/search?departmentId=${departmentId}&q=${queryString}`
    );
  }
  getPrimaryImageForObjectId(objectId: any): string {
    const object = this.objectData.find((obj) => obj.objectID === objectId);
    return object ? object.primaryImage : '';
  }
 }


