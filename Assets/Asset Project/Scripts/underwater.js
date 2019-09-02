var underwaterEffect:UI.Image;
var waterObj:Transform;
var diveSound:AudioClip;
var ObjectToHide:GameObject[];
private var isUnder:boolean = false;


function Update () {
    var audioS = GetComponent.<AudioSource>();
    if (transform.position.y < waterObj.position.y && ! isUnder){
        underwaterEffect.enabled = true;
        audioS.clip = diveSound;
        audioS.Play();
        isUnder = true;
        for each (GameObject in ObjectToHide)
        GameObject.active = false;
        }
    if (transform.position.y > waterObj.position.y && isUnder){
        underwaterEffect.enabled = false;
        isUnder = false;
        for each (GameObject in ObjectToHide)
        GameObject.active = true;
        }
}