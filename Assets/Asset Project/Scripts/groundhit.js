var FPMainCamera:Camera;
private var isInPain:boolean = false;
var damageSfx:AudioClip;
var damageImage:UI.Image;
var headAnimator:Animator;
var LavaComponent:UnityStandardAssets.ImageEffects.MotionBlur;


function Update () {
    if (isInPain){
        LavaComponent.blurAmount -= 0.01;
        if (LavaComponent.blurAmount < 0.05)
            unPain();
    }
}


function unPain(){
    isInPain = false;
    LavaComponent.enabled = false;
    LavaComponent.blurAmount = 0.92;
}


function OnCollisionEnter(collision : Collision) {
    if (collision.relativeVelocity.magnitude > 3){
        headAnimator.SetTrigger("damage");
        yield WaitForSeconds(0.05);
        var AudioS = FPMainCamera.GetComponent.<AudioSource>();
        AudioS.clip = damageSfx;
        damageImage.enabled = true;
        AudioS.Play();
        LavaComponent.enabled = true;
        LavaComponent.blurAmount = 0.92;
        isInPain = true;
        Invoke("unDamaged", 0.05);
    }
}


    function unDamaged(){
        damageImage.enabled = false;
    }