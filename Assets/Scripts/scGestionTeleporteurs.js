#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(trigg:Collider) 
{
	if (trigg.gameObject.tag == "teleportNiveau1") 
	{
		Application.LoadLevel (3);
	}

	if (trigg.gameObject.tag == "teleportTuto") 
	{
		Application.LoadLevel (2);
	}

	if (trigg.gameObject.tag == "teleportHub") 
	{
		Application.LoadLevel (1);
	}

	if (trigg.gameObject.tag == "teleportNiveau4") 
	{
		Application.LoadLevel (5);
	}

	if (trigg.gameObject.tag == "teleportNiveau5") 
	{
		Application.LoadLevel (6);
	}



	//Téléportation du personnage d'une étage à l'autre selon les niveaux


	//Niveau 4

		if (trigg.gameObject.tag == "teleportNiveau4(2Etage)") 
	{
		this.transform.position = new Vector3(69,2,156);
	}

		if (trigg.gameObject.tag == "teleportNiveau4(1Etage)") 
	{
		this.transform.position = new Vector3(136,2,160);

	}



	//Niveau 2

	    if (trigg.gameObject.tag == "teleportNiveau2(2Etage)") 
    {
         this.transform.position = Vector3(-94.36, 1, 237.96);
    }


}


