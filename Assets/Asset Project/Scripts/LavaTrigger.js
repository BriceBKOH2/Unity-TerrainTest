var lavaEffect:UI.Image;
var screamInPain:AudioClip;
var FPMainCamera:Camera;
var LavaComponent:UnityStandardAssets.ImageEffects.MotionBlur;


function OnTriggerEnter(col:Collider){
    var audioS = FPMainCamera.GetComponent.<AudioSource>();
    if (col.gameObject.tag == "Player"){
        audioS.clip = screamInPain;
        LavaComponent.enabled = true;
        audioS.Play();
        lavaEffect.enabled = true;
        yield WaitForSeconds (audioS.clip.length);
        Application.LoadLevel(Application.loadedLevel);
    }
}