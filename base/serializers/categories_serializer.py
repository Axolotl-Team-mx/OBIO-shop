from rest_framework import serializers
from base.models import Products, Reviews, Categorie

class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = '__all__'